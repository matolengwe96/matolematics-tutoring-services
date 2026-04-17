"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/subjects", label: "Subjects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/ai-study-assistant", label: "AI Study Assistant" },
]

export default function Navbar() {
  const pathname = usePathname()
  const isFindTutorPage = pathname === "/find-a-tutor"

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand brand-logo" aria-label="Matolematics home">
          <Image
            src="/brand/logo.png"
            alt="Matolematics Tutoring Service"
            width={220}
            height={60}
            priority
            className="brand-image"
          />
        </Link>

        <nav className="nav-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="nav-actions">
          <Link href="/foundation" className="button button-secondary button-small">
            Foundation
          </Link>

          {isFindTutorPage ? (
            <a href="#tutor-search" className="button button-primary button-small">
              Explore Tutors
            </a>
          ) : (
            <Link href="/find-a-tutor" className="button button-primary button-small">
              Find a Tutor
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}