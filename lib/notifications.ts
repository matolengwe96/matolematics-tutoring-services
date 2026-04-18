type NotificationPayload = {
  title: string
  lines: string[]
}

export async function notifyAdmin(payload: NotificationPayload) {
  const resendApiKey = process.env.RESEND_API_KEY
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL

  const text = [payload.title, "", ...payload.lines].join("\n")

  if (!resendApiKey || !adminEmail) {
    console.log("Admin notification skipped:", text)
    return
  }

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Matolematics <onboarding@resend.dev>",
        to: [adminEmail],
        subject: payload.title,
        text,
      }),
    })
  } catch (error) {
    console.error("Failed to send admin notification:", error)
  }
}