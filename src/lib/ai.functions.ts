import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      }),
    )
    .min(1)
    .max(30),
  lang: z.enum(["ar", "en", "tr"]).default("ar"),
});

const systemPrompt = (lang: string) =>
  `You are "RONI AI", the technical support assistant of RONI TECH X — a tech & repair hub covering phones (Custom ROM, TWRP, ADB & Fastboot, drivers), Android TV, and Windows (activation help, tools, commands).
Rules:
- Answer in this language code: ${lang} (ar = Arabic, en = English, tr = Turkish).
- Be concise, practical, numbered steps when useful.
- Only reference official/legal sources. Never provide piracy, illegal activation tools, cracks, or bypassing device owner protections (FRP/iCloud).
- Warn about data loss / warranty risks when flashing or rooting.
- If a question is outside tech support, say politely that RONI AI covers tech support only.`;

export const roniAiChat = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI is not configured");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.7-flash",
        messages: [{ role: "system", content: systemPrompt(data.lang) }, ...data.messages],
      }),
    });

    if (res.status === 429) return { reply: null, error: "rate_limit" as const };
    if (res.status === 402) return { reply: null, error: "credits" as const };
    if (!res.ok) {
      console.error("AI gateway error", res.status, await res.text());
      return { reply: null, error: "failed" as const };
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    return {
      reply: json.choices?.[0]?.message?.content ?? "",
      error: null,
    };
  });
