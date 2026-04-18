import { NextResponse } from "next/server"
import {
  createAdminSessionValue,
  getAdminCookieName,
  isValidAdminPassword,
} from "@/lib/admin-auth"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const password = String(formData.get("password") ?? "")

    if (!isValidAdminPassword(password)) {
      const loginUrl = new URL("/admin-login", request.url)
      loginUrl.searchParams.set("error", "invalid_password")
      return NextResponse.redirect(loginUrl)
    }

    const response = NextResponse.redirect(new URL("/admin", request.url))

    response.cookies.set({
      name: getAdminCookieName(),
      value: createAdminSessionValue(),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 12,
    })

    return response
  } catch (error) {
    console.error("Admin login error:", error)

    const loginUrl = new URL("/admin-login", request.url)
    loginUrl.searchParams.set("error", "server_error")
    return NextResponse.redirect(loginUrl)
  }
}