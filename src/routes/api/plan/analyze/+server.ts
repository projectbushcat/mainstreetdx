import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { env } from "$env/dynamic/private";
import Anthropic from "@anthropic-ai/sdk";
import { AnalyzeSystemPrompt } from "./prompt";
import { zfd } from "zod-form-data";
import type { PlanAnalyzeData } from "$lib/workbooks/Project";

const validator = zfd.formData({
  brief: zfd.text(),
  hours: zfd.text(),
  weeks: zfd.text(),
  total: zfd.text()
});

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { brief, hours, weeks, total } = validator.parse(await request.formData());

    const client = new Anthropic({
      apiKey: env.ANTHROPIC_API_KEY
    });

    const content = AnalyzeSystemPrompt({
      brief,
      hours,
      weeks,
      total
    });

    const message = await client.messages.create({
      model: "claude-3-5-sonnet-20240620",
      messages: [{ role: "user", content }],
      max_tokens: 1024
    });

    if (message.content[0].type === "text") {
      const data = JSON.parse(message.content[0].text);

      return json({
        success: true,
        data
      } as {
        success: true;
        data: PlanAnalyzeData;
      });
    }

    throw new Error("malformed response");
  } catch (e) {
    console.error(">> POST /api/plan/analyze", e);

    return json({
      success: false,
      data: null,
      reason: "Something went wrong"
    });
  }
};
