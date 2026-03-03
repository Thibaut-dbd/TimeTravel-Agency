import { NextRequest, NextResponse } from "next/server"

const SYSTEM_PROMPT =
  "Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe. Ton rôle : conseiller les clients sur les meilleures destinations temporelles. Ton ton : Professionnel mais chaleureux, passionné d'histoire, enthousiaste. Tu connais parfaitement : Paris 1889 (Belle Époque), Crétacé -65M, et Florence 1504 (Renaissance). Tu dois répondre en français de manière concise."

export async function POST(req: NextRequest) {
  const apiKey = process.env.MISTRAL_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "Mistral API key is not configured." },
      { status: 500 }
    )
  }

  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required." },
        { status: 400 }
      )
    }

    const mistralMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
    ]

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: mistralMessages,
        max_tokens: 512,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Mistral API error:", response.status, errorData)
      return NextResponse.json(
        { error: "Failed to get response from Mistral API." },
        { status: response.status }
      )
    }

    const data = await response.json()
    const assistantContent =
      data.choices?.[0]?.message?.content ?? "Désolé, je n'ai pas pu générer de réponse."

    return NextResponse.json({ content: assistantContent })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    )
  }
}
