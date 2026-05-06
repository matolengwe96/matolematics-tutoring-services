import OpenAI from "openai"
import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

type TutorProfile = {
  id: string
  full_name: string
  subjects: string[]
  levels: string[]
  delivery_modes: string[]
  bio: string
  rate_from: number | null
  rate_to: number | null
  status: string
}

function scoreTutor(message: string, tutor: TutorProfile) {
  const text = message.toLowerCase()
  let score = 0

  for (const subject of tutor.subjects || []) {
    if (text.includes(subject.toLowerCase())) {
      score += 3
    }
  }

  for (const level of tutor.levels || []) {
    if (text.includes(level.toLowerCase())) {
      score += 2
    }
  }

  if (text.includes("math") && tutor.subjects.some((s) => s.toLowerCase().includes("math"))) {
    score += 3
  }

  if (text.includes("python") && tutor.subjects.some((s) => s.toLowerCase().includes("python"))) {
    score += 3
  }

  if (text.includes("data") && tutor.subjects.some((s) => s.toLowerCase().includes("data"))) {
    score += 2
  }

  if (text.includes("statistics") && tutor.subjects.some((s) => s.toLowerCase().includes("statistics"))) {
    score += 3
  }

  return score
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required." }, { status: 400 })
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is missing in .env.local." },
        { status: 500 }
      )
    }

    const { data: tutors } = supabaseAdmin
      ? await supabaseAdmin
          .from("tutors")
          .select("id, full_name, subjects, levels, delivery_modes, bio, rate_from, rate_to, status")
          .eq("status", "active")
      : { data: [] }

    const safeTutors = (tutors ?? []) as TutorProfile[]

    const recommendedTutors = safeTutors
      .map((tutor) => ({
        ...tutor,
        match_score: scoreTutor(message, tutor),
      }))
      .filter((tutor) => tutor.match_score > 0)
      .sort((a, b) => b.match_score - a.match_score)
      .slice(0, 3)

    const tutorContext =
      recommendedTutors.length > 0
        ? recommendedTutors
            .map(
              (tutor) =>
                `${tutor.full_name}: teaches ${tutor.subjects.join(", ")} for ${tutor.levels.join(
                  ", "
                )}. Bio: ${tutor.bio}`
            )
            .join("\n")
        : "No matching tutors found."

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      instructions: `
You are the Matolematics AI Study Assistant.
You specialize in helping South African learners with mathematics, statistics, coding, and exam preparation.
Always explain concepts step-by-step in a clear, friendly way.
If matching tutors are provided, briefly mention that the learner may benefit from those tutors.
Do not invent tutor names. Only mention tutors from the provided tutor context.
`,
      input: `
Learner question:
${message}

Available matching tutors:
${tutorContext}
`,
    })

    return NextResponse.json({
      reply: response.output_text,
      recommendedTutors,
    })
  } catch (error) {
    console.error("AI Study Assistant error:", error)

    return NextResponse.json(
      { error: "Failed to generate AI response." },
      { status: 500 }
    )
  }
}