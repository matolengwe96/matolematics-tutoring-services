import Image from "next/image"
import Link from "next/link"

const pillars = [
  {
    title: "Academic excellence",
    text: "We are building a tutoring platform centered on strong subject understanding, serious teaching standards, and meaningful learner progress.",
  },
  {
    title: "Accessible support",
    text: "We believe learners should be able to access structured help in ways that better fit their financial realities and academic needs.",
  },
  {
    title: "AI-powered learning",
    text: "We are combining human tutoring with smarter study tools so learning can continue before, during, and after live sessions.",
  },
]

const whatMakesUsDifferent = [
  {
    title: "Flexible pricing model",
    text: "Instead of a rigid one-size-fits-all approach, the platform is being designed to support more flexible tutoring pathways.",
  },
  {
    title: "Mission-backed platform",
    text: "Matolematics is not only a tutoring business. It also includes a foundation vision for educational access and social impact.",
  },
  {
    title: "STEM-first positioning",
    text: "The brand is strongly positioned around mathematics, STEM, analytical skills, and future-ready learning support.",
  },
  {
    title: "Global ambition",
    text: "The long-term goal is to serve learners beyond local geography through a premium online-first experience.",
  },
]

const values = [
  "Excellence in teaching and learner support",
  "Respect for different financial realities",
  "Innovation through AI and digital tools",
  "Accessibility without lowering standards",
  "Long-term learner confidence and growth",
  "Impact that goes beyond transactions",
]

export default function AboutPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <div className="page-hero-copy">
              <p className="section-kicker">About</p>
              <h1 className="page-title">A modern tutoring platform built for excellence and access</h1>
              <p className="page-description">
                Matolematics is being built as a premium, AI-powered tutoring platform
                designed to help learners access world-class support in mathematics,
                STEM, and high-impact academic subjects.
              </p>

              <div className="button-row">
                <Link href="/find-a-tutor" className="button button-primary">
                  Find a Tutor
                </Link>
                <Link href="/foundation" className="button button-secondary">
                  Foundation Mission
                </Link>
              </div>
            </div>

            <div className="page-hero-panel">
              <div className="about-summary-card">
                <div className="about-summary-logo">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={42}
                    height={42}
                  />
                </div>

                <h3>What Matolematics stands for</h3>

                <div className="mini-step-list">
                  <div className="mini-step-item">
                    <span className="mini-step-number">1</span>
                    <p>High-quality tutoring rooted in academic seriousness.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">2</span>
                    <p>Better accessibility through flexible support and pricing pathways.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">3</span>
                    <p>A future-facing model that blends human teaching with AI-enabled learning support.</p>
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
              <span>Premium learning support</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Access-driven mission</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>AI-powered future</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story-panel">
            <div>
              <p className="section-kicker">The platform</p>
              <h2 className="section-title">More than a tutoring website</h2>
              <p className="section-description section-description-left">
                Matolematics is being designed as a full educational platform, not
                only a simple tutor directory. The aim is to create a serious learning
                environment where learners can find academic support, use AI-enhanced
                study tools, and access help in a way that feels structured, credible,
                and globally relevant.
              </p>
              <p className="section-description section-description-left">
                Over time, the platform can grow into a richer ecosystem that includes
                tutor matching, progress support, AI study assistance, subsidized
                access pathways, and a stronger educational mission through the foundation.
              </p>
            </div>

            <div className="about-story-card">
              <h3>Built around one core belief</h3>
              <p>
                Strong academic support should be excellent, modern, and accessible to
                more learners than traditional premium tutoring models usually allow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Core pillars</p>
            <h2 className="section-title">The foundation of the brand</h2>
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

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Differentiation</p>
            <h2 className="section-title">What makes Matolematics different</h2>
          </div>

          <div className="how-difference-grid">
            {whatMakesUsDifferent.map((item) => (
              <article key={item.title} className="how-difference-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="about-values-panel">
            <div>
              <p className="section-kicker">Values</p>
              <h2 className="section-title">What guides the platform</h2>
              <p className="section-description section-description-left">
                These principles shape both the business side of Matolematics and
                the broader learning mission behind it.
              </p>
            </div>

            <div className="about-values-list">
              {values.map((value) => (
                <div key={value} className="about-value-item">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="find-tutor-cta">
            <div>
              <p className="section-kicker">Next step</p>
              <h2 className="section-title">See the platform in action</h2>
              <p className="section-description section-description-left">
                Browse subjects, explore tutoring options, and see how Matolematics
                is being built to serve both excellence and educational impact.
              </p>
            </div>

            <div className="button-row">
              <Link href="/subjects" className="button button-primary">
                Browse Subjects
              </Link>
              <Link href="/find-a-tutor" className="button button-secondary">
                Find a Tutor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}