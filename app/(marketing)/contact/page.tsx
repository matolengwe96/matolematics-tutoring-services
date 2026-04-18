"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"

type ContactFormState = {
  name: string
  email: string
  subject: string
  phone: string
  message: string
}

const initialState: ContactFormState = {
  name: "",
  email: "",
  subject: "Tutoring inquiry",
  phone: "",
  message: "",
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage("")
    setSuccessMessage("")

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setErrorMessage("Please complete name, email, subject, and message.")
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok) {
        setErrorMessage(result.error || "Something went wrong while sending your message.")
        return
      }

      setSuccessMessage("Your message has been sent successfully.")
      setForm(initialState)
    } catch (error) {
      console.error("Contact form submission error:", error)
      setErrorMessage("Unable to send your message right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <div className="page-hero-copy">
              <p className="section-kicker">Contact</p>
              <h1 className="page-title">Get in touch with Matolematics</h1>
              <p className="page-description">
                Whether you’re looking for tutoring support, partnerships, or general
                information, we’d love to hear from you.
              </p>

              <div className="button-row">
                <Link href="/find-a-tutor" className="button button-primary">
                  Find a Tutor
                </Link>
                <Link href="/foundation" className="button button-secondary">
                  Foundation Support
                </Link>
              </div>
            </div>

            <div className="page-hero-panel">
              <div className="contact-summary-card">
                <h3>Quick contact</h3>

                <div className="contact-info">
                  <div>
                    <strong>Email</strong>
                    <p>info@matolematics.com</p>
                  </div>

                  <div>
                    <strong>Response time</strong>
                    <p>Typically within 24–48 hours</p>
                  </div>

                  <div>
                    <strong>Focus</strong>
                    <p>Tutoring • Partnerships • Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-form-panel">
            <div>
              <p className="section-kicker">Message</p>
              <h2 className="section-title">Send us a message</h2>
              <p className="section-description section-description-left">
                Fill in the form and we’ll get back to you as soon as possible.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, email: event.target.value }))
                    }
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, subject: event.target.value }))
                    }
                  >
                    <option value="Tutoring inquiry">Tutoring inquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Foundation support">Foundation support</option>
                    <option value="General question">General question</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+27..."
                    value={form.phone}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, phone: event.target.value }))
                    }
                  />
                </div>

                <div className="form-field form-field-wide">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, message: event.target.value }))
                    }
                  />
                </div>
              </div>

              {errorMessage ? <p className="form-message form-message-error">{errorMessage}</p> : null}
              {successMessage ? (
                <p className="form-message form-message-success">{successMessage}</p>
              ) : null}

              <div className="form-actions">
                <button
                  type="submit"
                  className="button button-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Reach out for</p>
            <h2 className="section-title">How we can help</h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <h3 className="feature-title">Tutoring support</h3>
              <p className="feature-text">
                Help finding tutors, subjects, or structured learning plans.
              </p>
            </article>

            <article className="feature-card">
              <h3 className="feature-title">Foundation access</h3>
              <p className="feature-text">
                Support requests for subsidized or sponsored tutoring.
              </p>
            </article>

            <article className="feature-card">
              <h3 className="feature-title">Partnerships</h3>
              <p className="feature-text">
                Schools, organizations, or sponsors looking to collaborate.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="find-tutor-cta">
            <div>
              <p className="section-kicker">Need help now?</p>
              <h2 className="section-title">Start with tutor matching</h2>
              <p className="section-description section-description-left">
                If you’re ready to begin, the fastest path is to request tutor
                support directly.
              </p>
            </div>

            <div className="button-row">
              <Link href="/find-a-tutor" className="button button-primary">
                Find a Tutor
              </Link>
              <Link href="/subjects" className="button button-secondary">
                Browse Subjects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}