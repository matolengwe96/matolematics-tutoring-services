import Image from "next/image"
import Link from "next/link"

const subjects = [
  "Mathematics",
  "Physical Sciences",
  "Accounting",
  "Statistics",
  "Coding",
  "AI & Data Skills",
]

const tutors = [
  {
    name: "Senior Mathematics Tutor",
    meta: "Grades 8–12 • Exam Prep • Live Sessions",
  },
  {
    name: "Science & STEM Mentor",
    meta: "Physical Sciences • Problem Solving • Revision Support",
  },
  {
    name: "AI Learning Coach",
    meta: "Study Planning • Guided Practice • Smart Revision",
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="hero-section hero-section-with-gif">
        <div className="hero-gif-background" aria-hidden="true">
          <img
            src="/brand/animation-grey.gif"
            alt=""
            className="hero-gif"
          />
          <div className="hero-gif-overlay" />
        </div>

        <div className="container hero-foreground">
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">
                AI-powered tutoring • Flexible access • Global ambition
              </p>

              <h1 className="hero-title">
                World-class tutoring for mathematics and STEM
              </h1>

              <p className="hero-description">
                Flexible pricing, expert tutors, and AI-powered learning support
                for learners everywhere.
              </p>

              <div className="button-row">
                <Link href="/find-a-tutor" className="button button-primary">
                  Find a Tutor
                </Link>

                <Link
                  href="/ai-study-assistant"
                  className="button button-secondary"
                >
                  Start Learning
                </Link>

                <Link href="/foundation" className="button button-secondary">
                  Apply for Support
                </Link>
              </div>

              <div className="hero-metrics">
                <div className="metric-card">
                  <strong>Flexible pricing</strong>
                  <span>Structured offers for families and learners</span>
                </div>
                <div className="metric-card">
                  <strong>AI support</strong>
                  <span>Smart study tools available alongside tutors</span>
                </div>
                <div className="metric-card">
                  <strong>Access mission</strong>
                  <span>Foundation support for learners who need help</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-card">
                <div className="hero-logo-wrap">
                  <Image
                    src="/brand/logo.png"
                    alt="Matolematics Tutoring Service"
                    width={260}
                    height={72}
                    className="hero-logo"
                  />
                </div>

                <p className="panel-label">Learning journey</p>
                <h3 className="panel-title">A better way to get support</h3>

                <div className="journey-list">
                  <div className="journey-item">
                    <span className="journey-step">1</span>
                    <div>
                      <strong>Choose your subject</strong>
                      <p>Select the level, goals, and learning needs.</p>
                    </div>
                  </div>

                  <div className="journey-item">
                    <span className="journey-step">2</span>
                    <div>
                      <strong>Set your budget</strong>
                      <p>Receive structured tutor offers that fit your needs.</p>
                    </div>
                  </div>

                  <div className="journey-item">
                    <span className="journey-step">3</span>
                    <div>
                      <strong>Learn with tutors and AI</strong>
                      <p>Track progress with better support and clear direction.</p>
                    </div>
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
              <span>Premium tutoring identity</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Serious academic positioning</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Accessible global support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Subjects</p>
            <h2 className="section-title">Built for strong academic foundations</h2>
            <p className="section-description">
              Start with the subjects that matter most, then expand into coding,
              data, and future-ready learning.
            </p>
          </div>

          <div className="subject-grid">
            {subjects.map((subject) => (
              <article key={subject} className="subject-card">
                <div className="subject-icon-wrap">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={36}
                    height={36}
                    className="subject-brand-icon"
                  />
                </div>
                <h3>{subject}</h3>
                <p>
                  Expert support, guided practice, and progress-focused learning.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">How it works</p>
            <h2 className="section-title">Simple, structured, and learner-first</h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <h3 className="feature-title">1. Choose your subject</h3>
              <p className="feature-text">
                Select mathematics, science, or other subjects based on your
                goals and level.
              </p>
            </article>

            <article className="feature-card">
              <h3 className="feature-title">2. Set your budget</h3>
              <p className="feature-text">
                Tell us what you can afford and compare structured tutor offers.
              </p>
            </article>

            <article className="feature-card">
              <h3 className="feature-title">3. Start learning</h3>
              <p className="feature-text">
                Learn with live tutoring and AI study support while tracking
                progress.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-banner">
          <div>
            <p className="section-kicker">AI learning layer</p>
            <h2 className="section-title">More than tutoring sessions</h2>
            <p className="section-description section-description-left">
              Use AI-powered study support for explanations, revision planning,
              guided practice, and smarter preparation between live sessions.
            </p>
          </div>

          <div className="ai-pills">
            <span className="pill">Concept explanations</span>
            <span className="pill">Quiz generation</span>
            <span className="pill">Study plans</span>
            <span className="pill">Session summaries</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Tutors</p>
            <h2 className="section-title">Support from serious educators</h2>
          </div>

          <div className="tutor-grid">
            {tutors.map((tutor) => (
              <article key={tutor.name} className="tutor-card">
                <div className="tutor-avatar-wrap">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={44}
                    height={44}
                    className="tutor-brand-icon"
                  />
                </div>
                <h3>{tutor.name}</h3>
                <p>{tutor.meta}</p>
                <Link href="/find-a-tutor" className="text-link">
                  View options
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container foundation-panel">
          <p className="section-kicker">Foundation</p>
          <h2 className="section-title">Education without barriers</h2>
          <p className="section-description">
            We believe every learner deserves access to world-class education.
            Apply for subsidized or sponsored tutoring through our foundation.
          </p>

          <div className="button-row">
            <Link href="/foundation" className="button button-primary">
              Apply for Support
            </Link>
            <Link href="/contact" className="button button-secondary">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}