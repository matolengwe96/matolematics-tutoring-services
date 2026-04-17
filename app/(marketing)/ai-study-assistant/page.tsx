import Image from "next/image"
import Link from "next/link"

const assistantFeatures = [
  {
    title: "Concept explanations",
    text: "Learners can get simpler breakdowns of difficult ideas before or after live tutoring sessions.",
  },
  {
    title: "Study planning",
    text: "Use structured weekly plans to help learners revise consistently and stay accountable.",
  },
  {
    title: "Practice support",
    text: "Generate guided practice prompts, revision questions, and topic-based exercises.",
  },
  {
    title: "Session reinforcement",
    text: "Extend learning beyond tutoring sessions with summaries, follow-up tasks, and revision prompts.",
  },
]

const assistantUseCases = [
  {
    title: "Before tutoring",
    text: "Prepare learners with topic overviews, vocabulary support, and readiness checks.",
  },
  {
    title: "Between sessions",
    text: "Keep progress moving with AI-assisted revision, practice, and reminders.",
  },
  {
    title: "After tutoring",
    text: "Reinforce session outcomes through summaries, next steps, and targeted follow-up work.",
  },
]

const assistantModules = [
  "Explain a topic simply",
  "Create a revision plan",
  "Generate quiz questions",
  "Summarize a tutoring session",
  "Break down difficult homework",
  "Recommend next study steps",
]

export default function AIStudyAssistantPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <div className="page-hero-copy">
              <p className="section-kicker">AI Study Assistant</p>
              <h1 className="page-title">Human tutoring supported by smarter learning tools</h1>
              <p className="page-description">
                The AI Study Assistant helps learners prepare, revise, and stay
                engaged between tutoring sessions with more structure and less friction.
              </p>

              <div className="button-row">
                <Link href="/find-a-tutor" className="button button-primary">
                  Find a Tutor
                </Link>
                <Link href="/pricing" className="button button-secondary">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="page-hero-panel">
              <div className="ai-summary-card">
                <div className="ai-summary-logo">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={42}
                    height={42}
                  />
                </div>

                <h3>How the assistant helps</h3>

                <div className="mini-step-list">
                  <div className="mini-step-item">
                    <span className="mini-step-number">1</span>
                    <p>Explains difficult concepts in simpler language.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">2</span>
                    <p>Supports revision planning and guided practice.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">3</span>
                    <p>Works alongside live tutors instead of replacing them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="brand-strip">
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Study support</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Smarter revision</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Human + AI learning</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Core features</p>
            <h2 className="section-title">What the AI Study Assistant can do</h2>
            <p className="section-description">
              These capabilities make tutoring more effective by adding support
              before, during, and after the live learning experience.
            </p>
          </div>

          <div className="feature-grid">
            {assistantFeatures.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-text">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">When to use it</p>
            <h2 className="section-title">Built into the learning journey</h2>
          </div>

          <div className="ai-journey-grid">
            {assistantUseCases.map((item) => (
              <article key={item.title} className="ai-journey-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ai-demo-panel">
            <div>
              <p className="section-kicker">Example modules</p>
              <h2 className="section-title">A flexible AI layer for many learning needs</h2>
              <p className="section-description section-description-left">
                This can eventually evolve into a true product experience with
                chatbot workflows, revision assistants, progress tracking, and more.
              </p>
            </div>

            <div className="ai-module-list">
              {assistantModules.map((module) => (
                <div key={module} className="ai-module-item">
                  {module}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Why this matters</p>
            <h2 className="section-title">More support without more friction</h2>
          </div>

          <div className="how-difference-grid">
            <article className="how-difference-card">
              <h3>Supports affordability</h3>
              <p>
                AI tools can help extend support for learners who cannot always access frequent live sessions.
              </p>
            </article>

            <article className="how-difference-card">
              <h3>Improves consistency</h3>
              <p>
                Students often struggle between sessions. The assistant helps keep them active and engaged.
              </p>
            </article>

            <article className="how-difference-card">
              <h3>Strengthens outcomes</h3>
              <p>
                Tutors become more effective when learners arrive better prepared and continue practicing afterward.
              </p>
            </article>

            <article className="how-difference-card">
              <h3>Builds product differentiation</h3>
              <p>
                This gives Matolematics a modern edge beyond traditional tutoring marketplaces.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="find-tutor-cta">
            <div>
              <p className="section-kicker">Next step</p>
              <h2 className="section-title">Pair tutoring with smarter learning support</h2>
              <p className="section-description section-description-left">
                Start with tutor matching now and build toward a richer AI-assisted
                learning platform over time.
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