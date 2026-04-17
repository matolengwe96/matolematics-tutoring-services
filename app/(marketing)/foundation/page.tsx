import Image from "next/image"
import Link from "next/link"

const pillars = [
  {
    title: "Subsidized tutoring",
    text: "Support learners who need reduced-cost tutoring because of financial constraints.",
  },
  {
    title: "Sponsored access",
    text: "Create pathways for learners to receive fully funded sessions through donors and partners.",
  },
  {
    title: "Free educational resources",
    text: "Offer learning materials, AI-supported study tools, and guided support beyond paid tutoring.",
  },
]

const eligibilityPoints = [
  "Learners with demonstrated financial need",
  "Learners with strong academic potential but limited access",
  "Students preparing for important academic milestones",
  "Families who need flexible or partial support options",
]

const partnerTypes = [
  {
    title: "Individual sponsors",
    text: "People who want to support a learner’s access to tutoring and educational resources.",
  },
  {
    title: "Schools and institutions",
    text: "Partners who want structured academic support for groups of learners.",
  },
  {
    title: "Corporate and donor partners",
    text: "Organizations that want measurable educational impact through sponsorship.",
  },
]

const processSteps = [
  {
    number: "1",
    title: "Apply for support",
    text: "Learners or families share their academic need, goals, and financial situation.",
  },
  {
    number: "2",
    title: "Review and assess",
    text: "The platform reviews applications and identifies the best support pathway.",
  },
  {
    number: "3",
    title: "Match support",
    text: "Approved learners are connected to subsidized tutoring, sponsored access, or resource-based support.",
  },
  {
    number: "4",
    title: "Track outcomes",
    text: "Progress, consistency, and impact can be monitored over time to improve support quality.",
  },
]

export default function FoundationPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <div className="page-hero-copy">
              <p className="section-kicker">Foundation</p>
              <h1 className="page-title">Education without barriers</h1>
              <p className="page-description">
                The Matolematics Foundation is part of the long-term mission to make
                world-class tutoring, learning support, and educational opportunity
                more accessible to learners who need it most.
              </p>

              <div className="button-row">
                <Link href="/find-a-tutor" className="button button-primary">
                  Apply for Support
                </Link>
                <Link href="/contact" className="button button-secondary">
                  Partner With Us
                </Link>
              </div>
            </div>

            <div className="page-hero-panel">
              <div className="foundation-summary-card">
                <div className="foundation-summary-logo">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={42}
                    height={42}
                  />
                </div>

                <h3>Mission focus</h3>

                <div className="mini-step-list">
                  <div className="mini-step-item">
                    <span className="mini-step-number">1</span>
                    <p>Expand access to high-quality tutoring for underserved learners.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">2</span>
                    <p>Support families who cannot always afford full-cost tutoring.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">3</span>
                    <p>Build a bridge between educational excellence and social impact.</p>
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
              <span>Access-first mission</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Education with impact</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Scalable support model</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Core pillars</p>
            <h2 className="section-title">What the foundation can provide</h2>
            <p className="section-description">
              The foundation is designed to create real educational access rather than
              offering only a symbolic promise.
            </p>
          </div>

          <div className="feature-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="feature-card">
                <h3 className="feature-title">{pillar.title}</h3>
                <p className="feature-text">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="foundation-eligibility-panel">
            <div>
              <p className="section-kicker">Eligibility</p>
              <h2 className="section-title">Who this support is for</h2>
              <p className="section-description section-description-left">
                The goal is to create fair, respectful, and meaningful access for
                learners who need educational support but face financial limitations.
              </p>
            </div>

            <div className="foundation-eligibility-list">
              {eligibilityPoints.map((point) => (
                <div key={point} className="foundation-eligibility-item">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">How support works</p>
            <h2 className="section-title">A structured support pathway</h2>
          </div>

          <div className="journey-grid">
            {processSteps.map((step) => (
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
            <p className="section-kicker">Partners</p>
            <h2 className="section-title">Who can support this mission</h2>
          </div>

          <div className="feature-grid">
            {partnerTypes.map((partner) => (
              <article key={partner.title} className="feature-card">
                <h3 className="feature-title">{partner.title}</h3>
                <p className="feature-text">{partner.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="foundation-cta-panel">
            <div>
              <p className="section-kicker">Get involved</p>
              <h2 className="section-title">Apply for support or become a partner</h2>
              <p className="section-description section-description-left">
                This page can evolve into both a learner support application flow
                and a donor or partnership pipeline.
              </p>
            </div>

            <div className="button-row">
              <Link href="/find-a-tutor" className="button button-primary">
                Apply for Support
              </Link>
              <Link href="/contact" className="button button-secondary">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}