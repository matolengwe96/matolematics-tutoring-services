import Image from "next/image"
import Link from "next/link"

const strengths = [
  {
    title: "Mathematical foundation",
    text: "The brand is grounded in serious academic strength, especially in mathematics and analytical thinking.",
  },
  {
    title: "AI and data expertise",
    text: "The founder’s background in AI, data, cloud systems, and problem solving gives the platform a modern edge.",
  },
  {
    title: "Education mission",
    text: "Matolematics is not only about premium tutoring, but also about widening access to world-class learning support.",
  },
]

const focusAreas = [
  "AI-powered tutoring systems",
  "Flexible pricing and accessibility",
  "STEM and mathematics excellence",
  "Online-first educational reach",
  "Foundation-backed support for underserved learners",
  "Long-term edtech platform growth",
]

const values = [
  {
    title: "Excellence",
    text: "High standards in teaching, learner support, and educational delivery.",
  },
  {
    title: "Accessibility",
    text: "A belief that financial difficulty should not be the end of academic opportunity.",
  },
  {
    title: "Innovation",
    text: "Using AI and technology to improve how learners access and experience support.",
  },
  {
    title: "Human impact",
    text: "Technology matters, but real learner outcomes and confidence matter even more.",
  },
]

export default function FounderPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <div className="page-hero-copy">
              <p className="section-kicker">Founder</p>
              <h1 className="page-title">Built with ambition, purpose, and academic seriousness</h1>
              <p className="page-description">
                Matolematics is founded by Yamkela Matolengwe, with a vision to
                combine world-class tutoring, AI-powered learning support, and
                broader educational access through a mission-driven platform.
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
              <div className="founder-summary-card">
                <div className="founder-summary-logo">
                  <Image
                    src="/brand/icon.png"
                    alt="Matolematics icon"
                    width={42}
                    height={42}
                  />
                </div>

                <h3>Founder profile</h3>

                <div className="mini-step-list">
                  <div className="mini-step-item">
                    <span className="mini-step-number">1</span>
                    <p>Strong grounding in mathematics, analytical thinking, and structured problem solving.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">2</span>
                    <p>AI, data, and cloud-oriented technical perspective for building a future-ready learning platform.</p>
                  </div>
                  <div className="mini-step-item">
                    <span className="mini-step-number">3</span>
                    <p>A mission to make serious educational support more accessible to more learners.</p>
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
              <span>Academic discipline</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>AI-driven vision</span>
            </div>
            <div className="brand-strip-item">
              <Image
                src="/brand/icon.png"
                alt="Matolematics icon"
                width={28}
                height={28}
                className="brand-strip-icon"
              />
              <span>Impact-focused mission</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="founder-story-panel">
            <div className="founder-story-copy">
              <p className="section-kicker">The story</p>
              <h2 className="section-title">Why Matolematics exists</h2>
              <p className="section-description section-description-left">
                Matolematics was shaped by the belief that strong academic support
                should not be limited to a small group of learners who can easily
                afford it. It was built to bring together serious tutoring quality,
                modern AI-powered learning support, and a broader access mission.
              </p>
              <p className="section-description section-description-left">
                The long-term vision is not simply to run a tutoring service. It is
                to build an education platform that helps learners strengthen their
                understanding, grow their confidence, and access better opportunities
                through high-quality support.
              </p>
            </div>

            <div className="founder-story-side">
              <div className="founder-portrait-card">
                <div className="founder-image-wrapper">
                  <Image
                    src="/founder.png"
                    alt="Yamkela Matolengwe - Founder of Matolematics"
                    width={700}
                    height={700}
                    className="founder-image"
                    priority
                  />
                </div>

                <h3>Yamkela Matolengwe</h3>
                <p>Founder of Matolematics</p>

                <div className="founder-socials">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="button button-secondary button-small"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Core strengths</p>
            <h2 className="section-title">What the founder brings into the platform</h2>
          </div>

          <div className="feature-grid">
            {strengths.map((strength) => (
              <article key={strength.title} className="feature-card">
                <h3 className="feature-title">{strength.title}</h3>
                <p className="feature-text">{strength.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="founder-focus-panel">
            <div>
              <p className="section-kicker">Focus</p>
              <h2 className="section-title">What Matolematics is being built around</h2>
              <p className="section-description section-description-left">
                The platform is being designed at the intersection of education,
                technology, structured tutoring, and access.
              </p>
            </div>

            <div className="founder-focus-list">
              {focusAreas.map((item) => (
                <div key={item} className="founder-focus-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Values</p>
            <h2 className="section-title">Principles behind the brand</h2>
          </div>

          <div className="how-difference-grid">
            {values.map((value) => (
              <article key={value.title} className="how-difference-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="find-tutor-cta">
            <div>
              <p className="section-kicker">Next step</p>
              <h2 className="section-title">Experience the vision through the platform</h2>
              <p className="section-description section-description-left">
                Explore the tutoring model, browse subject areas, and see how
                Matolematics is being positioned for both excellence and impact.
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