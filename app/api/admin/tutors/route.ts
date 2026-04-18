import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { requireAdminSession } from "@/lib/admin-session"

function redirectBack(request: Request) {
  return NextResponse.redirect(new URL("/admin#tutors", request.url))
}

function splitCsv(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
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

    if (action === "create") {
      const fullName = String(formData.get("full_name") ?? "").trim()
      const email = String(formData.get("email") ?? "").trim()
      const phone = String(formData.get("phone") ?? "").trim()
      const bio = String(formData.get("bio") ?? "").trim()
      const linkedinUrl = String(formData.get("linkedin_url") ?? "").trim()
      const subjects = splitCsv(String(formData.get("subjects") ?? ""))
      const levels = splitCsv(String(formData.get("levels") ?? ""))
      const deliveryModes = splitCsv(String(formData.get("delivery_modes") ?? ""))
      const rateFromRaw = String(formData.get("rate_from") ?? "").trim()
      const rateToRaw = String(formData.get("rate_to") ?? "").trim()

      if (!fullName || !bio || subjects.length === 0 || levels.length === 0) {
        return redirectBack(request)
      }

      await supabaseAdmin.from("tutors").insert([
        {
          full_name: fullName,
          email: email || null,
          phone: phone || null,
          bio,
          linkedin_url: linkedinUrl || null,
          subjects,
          levels,
          delivery_modes: deliveryModes,
          rate_from: rateFromRaw ? Number(rateFromRaw) : null,
          rate_to: rateToRaw ? Number(rateToRaw) : null,
          status: "active",
        },
      ])

      return redirectBack(request)
    }

    if (action === "update_status") {
      const id = String(formData.get("id") ?? "")
      const status = String(formData.get("status") ?? "")

      if (!id || !["active", "inactive"].includes(status)) {
        return redirectBack(request)
      }

      await supabaseAdmin.from("tutors").update({ status }).eq("id", id)
      return redirectBack(request)
    }

    if (action === "delete") {
      const id = String(formData.get("id") ?? "")

      if (!id) {
        return redirectBack(request)
      }

      await supabaseAdmin.from("tutors").delete().eq("id", id)
      return redirectBack(request)
    }

    return redirectBack(request)
  } catch (error) {
    console.error("Admin tutors action error:", error)
    return redirectBack(request)
  }
}