import { env } from "$env/dynamic/private";
import {
  AllResources,
  FreeResourceValidators,
  type FreeResource,
  type FreeResourceGenerateResponse
} from "$lib/data/EasyStreet.js";
import Anthropic from "@anthropic-ai/sdk";
import type { MessageParam } from "@anthropic-ai/sdk/resources/messages.mjs";
import { json } from "@sveltejs/kit";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

const buildQuestion = (q: string[], a: string[]) => q.map((q, i) => `${q}\n${a[i]}`).join("\n");

export const POST = async (event) => {
  try {
    const href = event.params.href;
    const resource: FreeResource | undefined = AllResources.find((r) => r.href === href);

    if (!resource) throw new Error(`generate API route couldn't find href: ${href}`);

    const body = await event.request.json();
    const parsed = FreeResourceValidators.generate.parse(body);

    const section = resource.sections[parsed.i];

    if (!section)
      throw new Error(
        `generate API couldn't find section for index ${parsed.i} raw: ${JSON.stringify(parsed)}`
      );

    if (parsed.a[parsed.i].length !== section.questions.length)
      throw new Error(
        `generate API found question and answer length mismatch (${parsed.a[parsed.i].length} != ${section.questions.length}) raw:\n${parsed.a[parsed.i]}\n${section.questions}`
      );

    const user_content = [];

    for (let i = 0; i <= parsed.i; i++) {
      user_content.push(buildQuestion(resource.sections[i].questions, parsed.a[i]));
    }

    const messages: MessageParam[] = [
      {
        role: "user",
        content: user_content.join("\n")
      }
    ];

    const client = new Anthropic({
      apiKey: env.ANTHROPIC_API_KEY
    });

    const message = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 768,
      system: section.prompt,
      messages
    });

    // Claude may return non-text blocks, such as thinking, before its visible response.
    const content = message.content
      // Narrow the union so TypeScript knows each remaining block has a `text` property.
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n");

    if (content.length === 0) {
      throw new Error(`malformed response:\n${JSON.stringify(message)}`);
    }

    // Convert Claude's Markdown into HTML while retaining intentional single-line breaks.
    const renderedContent = await marked.parse(content, { async: false, breaks: true, gfm: true });
    // Sanitize model-generated markup before the client renders it with Svelte's `@html` tag.
    const insights = sanitizeHtml(renderedContent, {
      allowedTags: [
        "p",
        "br",
        "strong",
        "em",
        "ul",
        "ol",
        "li",
        "blockquote",
        "code",
        "pre",
        "hr",
        "a",
        "h4",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "del"
      ],
      allowedAttributes: {
        a: ["href", "title"]
      },
      allowedSchemes: ["http", "https", "mailto"],
      allowProtocolRelative: false,
      // Keep AI-generated headings beneath the component's existing level-three heading.
      transformTags: {
        h1: "h4",
        h2: "h4",
        h3: "h4",
        h5: "h4",
        h6: "h4"
      }
    });

    if (insights.trim().length === 0) {
      throw new Error(`generate API received no safe HTML:\n${JSON.stringify(message)}`);
    }

    return json({
      success: true,
      insights
    } as FreeResourceGenerateResponse);
  } catch (e) {
    console.log(e);
    return json({
      success: false
    } as FreeResourceGenerateResponse);
  }
};
