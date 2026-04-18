import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { notifyAdmin } from "@/lib/notifications"

type ContactPayload = {
  name: string
  email: string
  subject: string
  phone?: string
  message: string
}

export async function POST(request: Request) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "Server database client is not configured." },
        { status: 500 }
      )
    }

    const body = (await request.json()) as Partial<ContactPayload>

    const name = body.name?.trim() ?? ""
    const email = body.email?.trim() ?? ""
    const subject = body.subject?.trim() ?? ""
    const phone = body.phone?.trim() ?? ""
    const message = body.message?.trim() ?? ""

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from("contact_messages")
      .insert([
        {
          name,
          email,
          subject,
          phone,
          message,
          status: "new",
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Error inserting contact message:", error)
      return NextResponse.json(
        { error: "Failed to save contact message." },
        { status: 500 }
      )
    }

    await notifyAdmin({
      title: "New contact message submitted",
      lines: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        `Phone: ${phone || "Not provided"}`,
        `Message: ${message}`,
      ],
    })

    return NextResponse.json(
      { message: "Contact message saved successfully.", data },
      { status: 201 }
    )
  } catch (error) {
    console.error("Unexpected contact error:", error)
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    )
  }
}