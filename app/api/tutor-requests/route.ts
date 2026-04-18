import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { notifyAdmin } from "@/lib/notifications"

type TutorRequestPayload = {
  subject: string
  level: string
  budget: string
  frequency: string
  goals: string
}

export async function POST(request: Request) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "Server database client is not configured." },
        { status: 500 }
      )
    }

    const body = (await request.json()) as Partial<TutorRequestPayload>

    const subject = body.subject?.trim() ?? ""
    const level = body.level?.trim() ?? ""
    const budget = body.budget?.trim() ?? ""
    const frequency = body.frequency?.trim() ?? ""
    const goals = body.goals?.trim() ?? ""

    if (!subject || !level || !goals) {
      return NextResponse.json(
        { error: "Subject, level, and goals are required." },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from("tutor_requests")
      .insert([
        {
          subject,
          level,
          budget,
          frequency,
          goals,
          status: "new",
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Error inserting tutor request:", error)
      return NextResponse.json(
        { error: "Failed to save tutor request." },
        { status: 500 }
      )
    }

    await notifyAdmin({
      title: "New tutor request submitted",
      lines: [
        `Subject: ${subject}`,
        `Level: ${level}`,
        `Budget: ${budget || "Not provided"}`,
        `Frequency: ${frequency || "Not provided"}`,
        `Goals: ${goals}`,
      ],
    })

    return NextResponse.json(
      { message: "Tutor request saved successfully.", data },
      { status: 201 }
    )
  } catch (error) {
    console.error("Unexpected tutor request error:", error)
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    )
  }
}