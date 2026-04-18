import { createHmac, timingSafeEqual } from "node:crypto"

const ADMIN_COOKIE_NAME = "matolematics_admin_session"

function getPassword() {
  const password = process.env.ADMIN_DASHBOARD_PASSWORD

  if (!password) {
    throw new Error("Missing ADMIN_DASHBOARD_PASSWORD")
  }

  return password
}

function getCookieSecret() {
  const secret = process.env.ADMIN_DASHBOARD_COOKIE_SECRET

  if (!secret) {
    throw new Error("Missing ADMIN_DASHBOARD_COOKIE_SECRET")
  }

  return secret
}

function signValue(value: string) {
  return createHmac("sha256", getCookieSecret()).update(value).digest("hex")
}

export function getAdminCookieName() {
  return ADMIN_COOKIE_NAME
}

export function createAdminSessionValue() {
  const value = "matolematics-admin"
  const signature = signValue(value)
  return `${value}.${signature}`
}

export function isValidAdminPassword(password: string) {
  return password === getPassword()
}

export function verifyAdminSessionValue(sessionValue?: string | null) {
  if (!sessionValue) {
    return false
  }

  const [value, signature] = sessionValue.split(".")

  if (!value || !signature) {
    return false
  }

  const expectedSignature = signValue(value)
  const actualBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expectedSignature)

  if (actualBuffer.length !== expectedBuffer.length) {
    return false
  }

  return timingSafeEqual(actualBuffer, expectedBuffer)
}