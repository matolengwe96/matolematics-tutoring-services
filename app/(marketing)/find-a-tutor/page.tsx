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

const levels = [
  "Primary School",
  "Middle School",
  "High School",
  "University",
  "Adult Learning",
  "Exam Preparation",
]

const tutors = [
  {
    name: "Anele M.",
    title: "Senior Mathematics Tutor",
    subjects: "Algebra • Calculus • Exam Prep",
    level: "High School • University",
    mode: "Online • 1-on-1 • Group Support",
    price: "From $12/session",
    description:
      "Focused on conceptual clarity, exam strategy, and long-term confidence in mathematics.",
  },
  {
    name: "Lethabo K.",
    title: "Physical Sciences Mentor",
    subjects: "Chemistry • Physics • Problem Solving",
    level: "High School",
    mode: "Online • Revision Intensive",
    price: "From $10/session",
    description:
      "Helps learners strengthen fundamentals and prepare with structured revision support.",
  },
  {
    name: "Mpho T.",
    title: "Statistics & Data Tutor",
    subjects: "Statistics • Research Support • Data Basics",
    level: "University • Adult Learning",
    mode: "Online • Assignment Guidance",
    price: "From $15/session",
    description:
      "Ideal for students who need practical help with statistics, interpretation, and confidence.",
  },
  {
    name: "Naledi R.",
    title: "Accounting Tutor",
    subjects: "Financial Accounting • Basics • Exam Revision",
    level: "High School • University",
    mode: "Online • Weekly Sessions",
    price: "From $11/session",
    description:
      "Breaks down difficult accounting topics into simple steps with structured practice.",
  },
  {
    name: "Karabo P.",
    title: "Coding Fundamentals Coach",
    subjects: "Programming Basics • Logic • Intro Projects",
    level: "Teen Learners • Beginners",
    mode: "Online • Project-Based",
    price: "From $14/session",
    description:
      "Supports learners entering coding with a practical, friendly, step-by-step approach.",
  },
  {
    name: "Tshepo D.",
    title: "AI Learning Coach",
    subjects: "Study Planning • AI Tools • Smarter Revision",
    level: "All Levels",
    mode: "Online • Guided Study Support",
    price: "From $9/session",
    description:
      "Combines human support with AI-assisted study planning for better independent learning.",
  },
]

export default function FindTutorPage() {
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
              <div className="find-tutor-summary-card">
                <div className="find-tutor-summary-logo">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={42}
                    height={42}
                  />
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
        </div>
      </section>

      <section id="tutor-search" className="section">
        <div className="container">
          <div className="search-panel">
            <div className="search-panel-header">
              <p className="section-kicker">Tutor search</p>
              <h2 className="section-title">Start with what matters most</h2>
              <p className="section-description section-description-left">
                Use these fields as your first request form. Later we can connect this to a
                real database and booking flow.
              </p>
            </div>

            <form className="tutor-search-form">
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" defaultValue="">
                    <option value="" disabled>
                      Choose a subject
                    </option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="level">Level</label>
                  <select id="level" defaultValue="">
                    <option value="" disabled>
                      Choose a level
                    </option>
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="budget">Budget range</label>
                  <input
                    id="budget"
                    type="text"
                    placeholder="e.g. $10 - $20 per session"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="frequency">Session frequency</label>
                  <select id="frequency" defaultValue="">
                    <option value="" disabled>
                      Choose frequency
                    </option>
                    <option>Once a week</option>
                    <option>Twice a week</option>
                    <option>Three times a week</option>
                    <option>Flexible / as needed</option>
                  </select>
                </div>

                <div className="form-field form-field-wide">
                  <label htmlFor="goals">Learning goals</label>
                  <textarea
                    id="goals"
                    rows={5}
                    placeholder="Describe the learner’s goals, current challenges, exams, or topics that need support."
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="button button-primary">
                  Request Tutor Support
                </button>
                <Link href="/contact" className="button button-secondary">
                  Ask a Question
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Available tutors</p>
            <h2 className="section-title">Preview your tutoring options</h2>
            <p className="section-description">
              These are sample tutor profiles for the first version of your marketplace.
              We can connect them to real tutor onboarding next.
            </p>
          </div>

          <div className="tutor-results-grid">
            {tutors.map((tutor) => (
              <article key={tutor.name} className="tutor-result-card">
                <div className="tutor-result-top">
                  <div className="tutor-result-avatar">
                    <Image
                      src="/brand/icon.png"
                      alt="Matolematics icon"
                      width={42}
                      height={42}
                    />
                  </div>

                  <div>
                    <h3>{tutor.name}</h3>
                    <p className="tutor-result-title">{tutor.title}</p>
                  </div>
                </div>

                <div className="tutor-result-meta">
                  <div className="meta-block">
                    <span className="meta-label">Subjects</span>
                    <span>{tutor.subjects}</span>
                  </div>
                  <div className="meta-block">
                    <span className="meta-label">Level</span>
                    <span>{tutor.level}</span>
                  </div>
                  <div className="meta-block">
                    <span className="meta-label">Format</span>
                    <span>{tutor.mode}</span>
                  </div>
                  <div className="meta-block">
                    <span className="meta-label">Pricing</span>
                    <span>{tutor.price}</span>
                  </div>
                </div>

                <p className="tutor-result-description">{tutor.description}</p>

                <div className="tutor-result-actions">
                  <a href="#tutor-search" className="button button-primary button-small">
                    Request This Tutor
                  </a>
                  <Link href="/contact" className="button button-secondary button-small">
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="find-tutor-cta">
            <div>
              <p className="section-kicker">Flexible access</p>
              <h2 className="section-title">Need support but have budget constraints?</h2>
              <p className="section-description section-description-left">
                Learners and families can request subsidized or foundation-supported
                access where needed.
              </p>
            </div>

            <div className="button-row">
              <Link href="/foundation" className="button button-primary">
                Apply for Support
              </Link>
              <Link href="/pricing" className="button button-secondary">
                View Pricing Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}