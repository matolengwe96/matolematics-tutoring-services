"use client"

import { FormEvent, useState } from "react"

type RecommendedTutor = {
  id: string
  full_name: string
  subjects: string[]
  levels: string[]
  delivery_modes: string[]
  bio: string
  rate_from: number | null
  rate_to: number | null
}

type ChatMessage = {
  role: "user" | "assistant"
  content: string
  recommendedTutors?: RecommendedTutor[]
}

const starterPrompts = [
  "Help me make a study plan for Grade 12 Mathematics.",
  "Explain functions in a simple way.",
  "How do I prepare for a statistics test?",
  "Help me understand Python loops.",
]

export default function AIStudyAssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m the Matolematics AI Study Assistant. Ask me for help with maths, statistics, coding, study planning, or exam preparation.",
    },
  ])

  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  async function sendMessage(messageText: string) {
    const cleanMessage = messageText.trim()

    if (!cleanMessage || isLoading) {
      return
    }

    setErrorMessage("")
    setInput("")

    const nextMessages: ChatMessage[] = [
      ...messages,
      {
        role: "user",
        content: cleanMessage,
      },
    ]

    setMessages(nextMessages)
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai-study-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: cleanMessage,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.")
      }

      setMessages([
  ...nextMessages,
  {
    role: "assistant",
    content: data.reply,
    recommendedTutors: data.recommendedTutors ?? [],
  },
])
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await sendMessage(input)
  }

  return (
    <main className="ai-chat-page">
      <section className="ai-chat-hero">
        <div className="container">
          <p className="section-kicker">AI Study Assistant</p>
          <h1 className="page-title">Learn faster with guided support</h1>
          <p className="page-description">
            Ask questions, get step-by-step explanations, and build better study habits with
            Matolematics AI support.
          </p>
        </div>
      </section>

      <section className="container ai-chat-section">
        <div className="ai-chat-shell">
          <div className="ai-chat-sidebar">
            <h2>Try asking</h2>

            <div className="ai-prompt-list">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="ai-prompt-button"
                  onClick={() => sendMessage(prompt)}
                  disabled={isLoading}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="ai-chat-note">
              <strong>Demo tip:</strong>
              <p>
                Ask a maths, statistics, coding, or study planning question during your
                presentation.
              </p>
            </div>
          </div>

          <div className="ai-chat-card">
            <div className="ai-chat-messages">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`ai-message ai-message-${message.role}`}
                >
                  <span className="ai-message-label">
                    {message.role === "assistant" ? "Matolematics AI" : "You"}
                  </span>
                  <p>{message.content}</p>

{message.recommendedTutors && message.recommendedTutors.length > 0 ? (
  <div className="ai-tutor-recommendations">
    <strong>Recommended tutors</strong>

    {message.recommendedTutors.map((tutor) => (
      <div key={tutor.id} className="ai-tutor-card">
        <h3>{tutor.full_name}</h3>
        <p>{tutor.bio}</p>

        <div className="chip-list">
          {tutor.subjects.map((subject) => (
            <span key={subject} className="chip">
              {subject}
            </span>
          ))}
        </div>

        <small>
          {tutor.rate_from || tutor.rate_to
            ? `Rate: R${tutor.rate_from ?? "?"} - R${tutor.rate_to ?? "?"}`
            : "Rate available on request"}
        </small>
      </div>
    ))}
  </div>
) : null}
                </div>
              ))}

              {isLoading ? (
                <div className="ai-message ai-message-assistant">
                  <span className="ai-message-label">Matolematics AI</span>
                  <p>Thinking...</p>
                </div>
              ) : null}
            </div>

            {errorMessage ? (
              <p className="form-message form-message-error">{errorMessage}</p>
            ) : null}

            <form className="ai-chat-form" onSubmit={handleSubmit}>
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask for help with maths, coding, exam prep, or study planning..."
                rows={3}
              />

              <button type="submit" className="button button-primary" disabled={isLoading}>
                {isLoading ? "Thinking..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}