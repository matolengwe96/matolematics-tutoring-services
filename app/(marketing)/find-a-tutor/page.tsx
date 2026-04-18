"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"

type TutorFormState = {
  subject: string
  level: string
  budget: string
  frequency: string
  goals: string
}

const initialState: TutorFormState = {
  subject: "",
  level: "",
  budget: "",
  frequency: "",
  goals: "",
}

export default function FindATutorPage() {
  const [form, setForm] = useState<TutorFormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage("")
    setSuccessMessage("")

    if (!form.subject || !form.level || !form.goals.trim()) {
      setErrorMessage("Please complete subject, level, and learning goals.")
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch("/api/tutor-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok) {
        setErrorMessage(result.error || "Something went wrong while saving your request.")
        return
      }

      setSuccessMessage("Your tutor request has been submitted successfully.")
      setForm(initialState)
    } catch (error) {
      console.error("Tutor request submission error:", error)
      setErrorMessage("Unable to submit right now. Please try again.")
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
              <p className="section-kicker">Find a tutor</p>
              <h1 className="page-title">Find the right support for your learning goals</h1>
              <p className="page-description">
                Compare expert tutors, choose the subjects you need, and request support
                based on your goals, level, and budget.
              </p>

              <div className="button-row">
                <a href="#tutor-search" className="button button-primary">
                  Explore Tutors
                </a>
                <Link href="/foundation" className="button button-secondary">
                  Apply for Support
                </Link>
              </div>
            </div>

            <div className="page-hero-panel">
              <div className="how-summary-card">
                <div className="how-summary-logo">
                  <span className="mini-step-number">✓</span>
                </div>

                <h3>How booking works</h3>

                <div className="mini-step-list">
                  <div className="mini-step-item">
                    <span className="mini-step-number">1</span>
                    <p>Select a subject and level.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">2</span>
                    <p>Share your budget and learning goals.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">3</span>
                    <p>Compare tutors and request your preferred option.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="brand-strip">
            <div className="brand-strip-item">
              <span className="brand-strip-text">AI-powered tutoring</span>
            </div>
            <div className="brand-strip-item">
              <span className="brand-strip-text">Flexible access</span>
            </div>
            <div className="brand-strip-item">
              <span className="brand-strip-text">Global ambition</span>
            </div>
          </div>
        </div>
      </section>

      <section id="tutor-search" className="section">
        <div className="container">
          <div className="contact-form-panel">
            <div>
              <p className="section-kicker">Tutor search</p>
              <h2 className="section-title">Start with what matters most</h2>
              <p className="section-description section-description-left">
                Use these fields as your first request form. Later we can connect this
                to tutor profiles, filtering, and a full booking workflow.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, subject: event.target.value }))
                    }
                  >
                    <option value="">Choose a subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physical Sciences">Physical Sciences</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Statistics">Statistics</option>
                    <option value="Coding">Coding</option>
                    <option value="AI & Data Skills">AI & Data Skills</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="level">Level</label>
                  <select
                    id="level"
                    value={form.level}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, level: event.target.value }))
                    }
                  >
                    <option value="">Choose a level</option>
                    <option value="Primary School">Primary School</option>
                    <option value="Middle School">Middle School</option>
                    <option value="High School">High School</option>
                    <option value="University">University</option>
                    <option value="Adult Learning">Adult Learning</option>
                    <option value="Exam Preparation">Exam Preparation</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="budget">Budget range</label>
                  <input
                    id="budget"
                    type="text"
                    placeholder="e.g. $10 - $20 per session"
                    value={form.budget}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, budget: event.target.value }))
                    }
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="frequency">Session frequency</label>
                  <select
                    id="frequency"
                    value={form.frequency}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, frequency: event.target.value }))
                    }
                  >
                    <option value="">Choose frequency</option>
                    <option value="Once a week">Once a week</option>
                    <option value="Twice a week">Twice a week</option>
                    <option value="Three times a week">Three times a week</option>
                    <option value="Flexible">Flexible</option>
                    <option value="Exam-only support">Exam-only support</option>
                  </select>
                </div>

                <div className="form-field form-field-wide">
                  <label htmlFor="goals">Learning goals</label>
                  <textarea
                    id="goals"
                    rows={6}
                    placeholder="Describe the learner’s goals, current challenges, exams, or topics that need support."
                    value={form.goals}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, goals: event.target.value }))
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
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}