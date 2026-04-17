import Image from "next/image"
import Link from "next/link"

const steps = [
  {
    number: "1",
    title: "Choose your subject",
    text: "Start with the subject, topic area, and academic level where support is needed most.",
  },
  {
    number: "2",
    title: "Share your learning goals",
    text: "Tell us what the learner is struggling with, what outcomes matter, and what kind of support is needed.",
  },
  {
    number: "3",
    title: "Set your budget",
    text: "Request support based on what you can afford and the session frequency that makes sense for you.",
  },
  {
    number: "4",
    title: "Compare tutoring options",
    text: "Review tutor matches, learning formats, and structured support plans that fit the request.",
  },
  {
    number: "5",
    title: "Start learning",
    text: "Begin with tutoring sessions and, over time, combine them with AI-supported study systems for better results.",
  },
  {
    number: "6",
    title: "Track progress",
    text: "Use a more structured learning journey with revision focus, accountability, and clearer next steps.",
  },
]

const supportModes = [
  {
    title: "1-on-1 tutoring",
    text: "Best for focused academic support, deeper personalization, and closing difficult knowledge gaps.",
  },
  {
    title: "Small-group learning",
    text: "A more affordable support path for learners who still benefit from live guided teaching.",
  },
  {
    title: "AI-assisted learning",
    text: "Use study planning, concept explanations, and guided revision between tutoring sessions.",
  },
]

const accessPoints = [
  {
    title: "Flexible pricing",
    text: "Families and learners can request structured support aligned to their budget.",
  },
  {
    title: "Foundation pathway",
    text: "Learners with financial constraints can apply for subsidized or sponsored access.",
  },
  {
    title: "Global accessibility",
    text: "Online-first delivery makes it easier to reach learners beyond local geography.",
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <div className="page-hero-copy">
              <p className="section-kicker">How it works</p>
              <h1 className="page-title">A clear path from need to learning support</h1>
              <p className="page-description">
                Matolematics is built to make tutoring easier to access, easier to
                understand, and easier to fit into real learning and budget needs.
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
              <div className="how-summary-card">
                <div className="how-summary-logo">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={42}
                    height={42}
                  />
                </div>

                <h3>Core platform idea</h3>

                <div className="mini-step-list">
                  <div className="mini-step-item">
                    <span className="mini-step-number">1</span>
                    <p>Better tutor matching based on real academic needs.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">2</span>
                    <p>More flexible pricing and accessibility than traditional tutoring models.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">3</span>
                    <p>AI-enhanced learning support layered on top of human tutoring.</p>
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
              <span>Simple learner journey</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Human + AI support</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Access-first model</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Journey</p>
            <h2 className="section-title">How learners move through the platform</h2>
            <p className="section-description">
              This is the learner journey your tutoring platform is being designed around.
            </p>
          </div>

          <div className="journey-grid">
            {steps.map((step) => (
              <article key={step.number} className="journey-card">
                <div className="journey-card-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Support formats</p>
            <h2 className="section-title">Different ways learners can get help</h2>
          </div>

          <div className="feature-grid">
            {supportModes.map((mode) => (
              <article key={mode.title} className="feature-card">
                <h3 className="feature-title">{mode.title}</h3>
                <p className="feature-text">{mode.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="how-explainer-panel">
            <div>
              <p className="section-kicker">Access model</p>
              <h2 className="section-title">Designed for affordability and inclusion</h2>
              <p className="section-description section-description-left">
                The platform is intentionally built to serve both paying families and
                learners who may need supported access through the foundation model.
              </p>
            </div>

            <div className="how-explainer-list">
              {accessPoints.map((item) => (
                <div key={item.title} className="how-explainer-item">
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">What makes this different</p>
            <h2 className="section-title">Not just tutoring, but a stronger learning system</h2>
            <p className="section-description">
              Matolematics is positioned to become more than a tutor listing page.
              It can grow into a full learning platform.
            </p>
          </div>

          <div className="how-difference-grid">
            <article className="how-difference-card">
              <h3>Better matching</h3>
              <p>
                Tutor support begins with real context: subject, level, goals, and budget.
              </p>
            </article>

            <article className="how-difference-card">
              <h3>More accessible pricing</h3>
              <p>
                The platform is structured to serve more learners than premium-only tutoring models.
              </p>
            </article>

            <article className="how-difference-card">
              <h3>AI learning layer</h3>
              <p>
                Students can eventually receive smart support between sessions, not only during them.
              </p>
            </article>

            <article className="how-difference-card">
              <h3>Foundation support</h3>
              <p>
                A built-in support pathway helps align your business with impact and access.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="find-tutor-cta">
            <div>
              <p className="section-kicker">Ready to begin?</p>
              <h2 className="section-title">Start the learning journey now</h2>
              <p className="section-description section-description-left">
                Choose a subject, share what support is needed, and take the first
                step toward structured tutoring help.
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