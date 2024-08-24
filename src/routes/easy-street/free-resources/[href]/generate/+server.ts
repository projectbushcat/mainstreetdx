import { env } from "$env/dynamic/private";
import {
  AllResources,
  FreeResourceValidators,
  type FreeResource,
  type FreeResourceGenerateResponse
} from "$lib/data/EasyStreet.js";
import Anthropic from "@anthropic-ai/sdk";
import { json } from "@sveltejs/kit";

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

    if (parsed.a.length !== section.questions.length)
      throw new Error(
        `generate API found question and answer length mismatch (${parsed.a.length} != ${section.questions.length}) raw:\n${parsed.a}\n${section.questions}`
      );

    const user_message = section.questions
      .map((q, i) => `${i + 1}. ${q}\n${parsed.a[i] ?? "(No answer was provided)"}`)
      .join("\n");

    const client = new Anthropic({
      apiKey: env.ANTHROPIC_API_KEY
    });

    const message = await client.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 768,
      system: section.prompt,
      messages: [{ role: "user", content: user_message }]
    });

    if (message.content[0].type === "text") {
      return json({
        success: true,
        insights: message.content[0].text.replaceAll("\n", "<br/>")
      } as FreeResourceGenerateResponse);
    } else {
      throw new Error(`malformed response:\n${JSON.stringify(message)}`);
    }
  } catch (e) {
    return json({
      success: false
    } as FreeResourceGenerateResponse);
  }
};
