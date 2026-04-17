import Image from "next/image"
import Link from "next/link"

const subjectGroups = [
  {
    title: "Mathematics",
    description:
      "Build strong foundations in core mathematics, problem solving, algebra, geometry, calculus, and exam preparation.",
    items: [
      "Algebra",
      "Geometry",
      "Trigonometry",
      "Calculus",
      "Statistics",
      "Exam Preparation",
    ],
  },
  {
    title: "Physical Sciences",
    description:
      "Get guided support in physics and chemistry with step-by-step explanations, worked examples, and revision planning.",
    items: [
      "Physics Concepts",
      "Chemistry Concepts",
      "Problem Solving",
      "Lab Theory Support",
      "Exam Revision",
      "Concept Mastery",
    ],
  },
  {
    title: "Accounting",
    description:
      "Learn accounting principles with practical examples, structured exercises, and confidence-building support.",
    items: [
      "Basic Accounting",
      "Financial Statements",
      "Bookkeeping",
      "Exam Revision",
      "University Support",
      "Problem Areas",
    ],
  },
  {
    title: "Statistics",
    description:
      "Understand statistics clearly for school, university, and research-related academic work.",
    items: [
      "Descriptive Statistics",
      "Probability",
      "Data Interpretation",
      "Research Support",
      "Assignments",
      "University Tutoring",
    ],
  },
  {
    title: "Coding",
    description:
      "Start learning coding fundamentals with structured guidance, beginner-friendly teaching, and real project practice.",
    items: [
      "Programming Basics",
      "Logic Building",
      "Beginner Projects",
      "Intro Web Skills",
      "Problem Solving",
      "Digital Literacy",
    ],
  },
  {
    title: "AI & Data Skills",
    description:
      "Develop future-ready skills through AI-assisted learning, productivity tools, and introductory data workflows.",
    items: [
      "AI Study Skills",
      "Prompting Basics",
      "Data Fundamentals",
      "Digital Productivity",
      "Research Workflow",
      "Smart Revision Systems",
    ],
  },
]

const levels = [
  {
    title: "Primary School",
    text: "Foundational support for younger learners who need confidence, consistency, and strong basics.",
  },
  {
    title: "Middle School",
    text: "Structured academic support during a stage where gaps often begin to widen if left unmanaged.",
  },
  {
    title: "High School",
    text: "Focused subject tutoring, exam prep, revision systems, and performance improvement support.",
  },
  {
    title: "University",
    text: "Academic guidance for advanced content, assignments, problem areas, and higher-level understanding.",
  },
  {
    title: "Adult Learning",
    text: "Flexible support for adults returning to study, improving skills, or learning for career development.",
  },
  {
    title: "Exam Preparation",
    text: "Short-term, high-focus support for tests, revision, final exams, and academic milestones.",
  },
]

export default function SubjectsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <div className="page-hero-copy">
              <p className="section-kicker">Subjects</p>
              <h1 className="page-title">World-class support across high-impact subjects</h1>
              <p className="page-description">
                Matolematics is designed to support learners across mathematics,
                STEM, business-related subjects, coding, and future-ready digital skills.
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
              <div className="subjects-summary-card">
                <div className="subjects-summary-logo">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={42}
                    height={42}
                  />
                </div>

                <h3>What we focus on</h3>

                <div className="mini-step-list">
                  <div className="mini-step-item">
                    <span className="mini-step-number">1</span>
                    <p>Strong academic foundations in mathematics and science.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">2</span>
                    <p>Practical support in accounting, statistics, and problem solving.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">3</span>
                    <p>Modern learning through coding, AI, and digital productivity skills.</p>
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
              <span>Academic depth</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Future-ready subjects</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Flexible learning support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Subject areas</p>
            <h2 className="section-title">Built around subjects that matter most</h2>
            <p className="section-description">
              Each subject area is designed to support both academic performance
              and long-term learner confidence.
            </p>
          </div>

          <div className="subjects-grid">
            {subjectGroups.map((group) => (
              <article key={group.title} className="subject-detail-card">
                <div className="subject-detail-icon-wrap">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={36}
                    height={36}
                    className="subject-detail-icon"
                  />
                </div>

                <h3>{group.title}</h3>
                <p className="subject-detail-description">{group.description}</p>

                <ul className="subject-detail-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link href="/find-a-tutor" className="text-link">
                  Find support in {group.title}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Learning levels</p>
            <h2 className="section-title">Support for different stages of learning</h2>
            <p className="section-description">
              Your platform is not only about subjects — it’s also about meeting
              learners where they are.
            </p>
          </div>

          <div className="levels-grid">
            {levels.map((level) => (
              <article key={level.title} className="level-card">
                <h3>{level.title}</h3>
                <p>{level.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="subjects-banner">
            <div>
              <p className="section-kicker">AI + tutoring</p>
              <h2 className="section-title">Human support plus smarter study tools</h2>
              <p className="section-description section-description-left">
                Beyond live tutoring, learners can use AI-assisted study planning,
                concept explanations, guided revision, and more structured preparation.
              </p>
            </div>

            <div className="ai-pills">
              <span className="pill">Concept support</span>
              <span className="pill">Guided revision</span>
              <span className="pill">Study planning</span>
              <span className="pill">AI productivity</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="find-tutor-cta">
            <div>
              <p className="section-kicker">Ready to begin?</p>
              <h2 className="section-title">Choose a subject and get matched</h2>
              <p className="section-description section-description-left">
                Start with the subject you need most and we’ll help you find the
                right tutor support, learning structure, and pricing path.
              </p>
            </div>

            <div className="button-row">
              <Link href="/find-a-tutor" className="button button-primary">
                Find a Tutor
              </Link>
              <Link href="/foundation" className="button button-secondary">
                Apply for Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}