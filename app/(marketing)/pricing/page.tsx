import Image from "next/image"
import Link from "next/link"

const pricingTiers = [
  {
    name: "Starter Support",
    price: "From $9",
    frequency: "per session",
    description:
      "Good for learners who need light weekly support, revision help, or targeted topic assistance.",
    features: [
      "1-on-1 or small-group tutoring",
      "Flexible tutor matching",
      "Basic progress guidance",
      "AI study support recommendations",
    ],
    cta: "Choose Starter",
    featured: false,
  },
  {
    name: "Growth Plan",
    price: "From $15",
    frequency: "per session",
    description:
      "Ideal for learners who need more structured support, stronger accountability, and consistent progress.",
    features: [
      "Priority tutor matching",
      "Structured weekly plan",
      "Progress check-ins",
      "AI-assisted study workflow",
      "Exam and revision support",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Intensive Prep",
    price: "Custom",
    frequency: "pricing",
    description:
      "Best for exams, accelerated learning, difficult subjects, or high-frequency tutoring needs.",
    features: [
      "Custom learning plan",
      "Exam-focused tutoring schedule",
      "Flexible tutor allocation",
      "Priority communication",
      "Higher-touch learner support",
    ],
    cta: "Request Intensive Plan",
    featured: false,
  },
]

const pricingHighlights = [
  {
    title: "Flexible pricing",
    text: "Learners and parents can request support based on their budget, goals, and session needs.",
  },
  {
    title: "Multiple formats",
    text: "Choose from private sessions, small-group learning, or recurring support plans.",
  },
  {
    title: "Access mission",
    text: "Foundation support can help learners who need subsidized or sponsored access.",
  },
]

const faqItems = [
  {
    question: "Can families request tutors based on budget?",
    answer:
      "Yes. Your platform is designed to support flexible pricing and structured tutor matching based on affordability and learning needs.",
  },
  {
    question: "Will every tutor have the same price?",
    answer:
      "No. Pricing can vary by subject, level, tutor experience, frequency, and whether support is one-on-one or group-based.",
  },
  {
    question: "Can learners receive support through the foundation?",
    answer:
      "Yes. Eligible learners can apply for subsidized or sponsored support through your foundation pathway.",
  },
  {
    question: "Can AI support be included without full tutoring?",
    answer:
      "Yes. Over time, you can offer lighter AI-supported study plans for learners who need lower-cost support between live sessions.",
  },
]

export default function PricingPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <div className="page-hero-copy">
              <p className="section-kicker">Pricing</p>
              <h1 className="page-title">Flexible pricing designed for real access</h1>
              <p className="page-description">
                Build a platform where learners and families can find support that
                fits their goals, academic needs, and budget.
              </p>

              <div className="button-row">
                <Link href="/find-a-tutor" className="button button-primary">
                  Find a Tutor
                </Link>
                <Link href="/foundation" className="button button-secondary">
                  Apply for Support
                </Link>
              </div>
            </div>

            <div className="page-hero-panel">
              <div className="pricing-summary-card">
                <div className="pricing-summary-logo">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={42}
                    height={42}
                  />
                </div>

                <h3>How pricing works</h3>

                <div className="mini-step-list">
                  <div className="mini-step-item">
                    <span className="mini-step-number">1</span>
                    <p>Choose your subject, level, and support format.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">2</span>
                    <p>Share your budget and preferred session frequency.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">3</span>
                    <p>Receive structured options matched to your learning needs.</p>
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
              <span>Budget-aware matching</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Premium tutoring support</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Foundation-backed access</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Plans</p>
            <h2 className="section-title">Choose the level of support you need</h2>
            <p className="section-description">
              These sample tiers help communicate your pricing model clearly while
              leaving room for tutor-level flexibility.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={`pricing-card ${tier.featured ? "pricing-card-featured" : ""}`}
              >
                {tier.featured && <div className="pricing-badge">Most popular</div>}

                <h3>{tier.name}</h3>

                <div className="pricing-price-row">
                  <span className="pricing-price">{tier.price}</span>
                  <span className="pricing-frequency">{tier.frequency}</span>
                </div>

                <p className="pricing-description">{tier.description}</p>

                <ul className="pricing-feature-list">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Link href="/find-a-tutor" className="button button-primary pricing-card-button">
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Why this model works</p>
            <h2 className="section-title">Built for flexibility, fairness, and growth</h2>
          </div>

          <div className="feature-grid">
            {pricingHighlights.map((item) => (
              <article key={item.title} className="feature-card">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-comparison-panel">
            <div>
              <p className="section-kicker">Custom pricing path</p>
              <h2 className="section-title">Need something more tailored?</h2>
              <p className="section-description section-description-left">
                Families, schools, and adult learners can request custom support
                plans based on learner level, tutor expertise, schedule, and goals.
              </p>
            </div>

            <div className="button-row">
              <Link href="/find-a-tutor" className="button button-primary">
                Request Custom Support
              </Link>
              <Link href="/contact" className="button button-secondary">
                Contact the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">Common pricing questions</h2>
          </div>

          <div className="faq-grid">
            {faqItems.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="find-tutor-cta">
            <div>
              <p className="section-kicker">Need support now?</p>
              <h2 className="section-title">Let’s find a tutoring path that fits</h2>
              <p className="section-description section-description-left">
                Start with tutor matching, request a flexible plan, or apply for
                foundation-supported access.
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