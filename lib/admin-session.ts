import { cookies } from "next/headers"
import { getAdminCookieName, verifyAdminSessionValue } from "@/lib/admin-auth"

export function requireAdminSession() {
  const cookieStore = cookies()
  const sessionCookie = cookieStore.get(getAdminCookieName())?.value

  return verifyAdminSessionValue(sessionCookie)
}