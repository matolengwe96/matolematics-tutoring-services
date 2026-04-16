import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Matolematics",
  description:
    "World-class tutoring for mathematics and STEM, with flexible pricing and AI learning support.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}