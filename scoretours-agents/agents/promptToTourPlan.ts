import { OpenAI } from "openai";
import { TourPlan } from "../types/TourPlan";
import dotenv from "dotenv";
dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function parsePromptToTourPlan(
  userPrompt: string
): Promise<TourPlan> {
  const systemPrompt = `
You are a travel planner assistant for soccer fans. 
Parse the user's request into a structured tour plan as JSON.

Only respond with valid JSON using this schema:

{
  "league": string | null,
  "team": string | null,
  "destination": string | null,
  "origin": string | null,
  "month": string | null,
  "tripLength": string | null,
  "budget": "low" | "mid" | "high" | null,
  "interests": string[] | null
}`;

  const response = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0.2,
  });

  const raw = response.choices[0]?.message?.content?.trim();
  if (!raw) throw new Error("No response from LLM");

  // 🧼 Strip Markdown fences like ```json ... ```
  const cleaned = raw
    .replace(/^```json/, "")
    .replace(/^```/, "")
    .replace(/```$/, "")
    .trim();

  try {
    const parsed: TourPlan = JSON.parse(cleaned);
    return parsed;
  } catch (err) {
    console.error("❌ Failed to parse cleaned JSON:", cleaned);
    throw err;
  }
}
