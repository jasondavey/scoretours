import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages = body.messages || [];

  const response = await openai.chat.completions.create({
    model: 'gpt-4-1106-preview',
    messages: [
      { role: 'system', content: 'You are a helpful AI that helps users plan soccer tours by asking questions until a complete plan is formed.' },
      ...messages
    ],
    temperature: 0.3
  });

  const reply = response.choices[0]?.message?.content || 'Sorry, I didn’t understand that.';
  return NextResponse.json({ reply });
}
