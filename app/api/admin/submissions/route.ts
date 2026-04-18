import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { requireAdminSession } from "@/lib/admin-session"

function redirectBack(request: Request) {
  const url = new URL("/admin", request.url)
  return NextResponse.redirect(url)
}

export async function POST(request: Request) {
  try {
    if (!requireAdminSession()) {
      return NextResponse.redirect(new URL("/admin-login", request.url))
    }

    if (!supabaseAdmin) {
      return NextResponse.json({ error: "Supabase not configured." }, { status: 500 })
    }

    const formData = await request.formData()
    const action = String(formData.get("action") ?? "")
    const table = String(formData.get("table") ?? "")
    const id = String(formData.get("id") ?? "")
    const status = String(formData.get("status") ?? "")

    if (!table || !id) {
      return redirectBack(request)
    }

    if (!["tutor_requests", "contact_messages"].includes(table)) {
      return redirectBack(request)
    }

    if (action === "update_status") {
      if (!["new", "in_review", "contacted", "closed"].includes(status)) {
        return redirectBack(request)
      }

      await supabaseAdmin.from(table).update({ status }).eq("id", id)
      return redirectBack(request)
    }

    if (action === "delete") {
      await supabaseAdmin.from(table).delete().eq("id", id)
      return redirectBack(request)
    }

    return redirectBack(request)
  } catch (error) {
    console.error("Admin submissions action error:", error)
    return redirectBack(request)
  }
}