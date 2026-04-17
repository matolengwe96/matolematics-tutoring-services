import Link from "next/link"

export default function ContactPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <div className="page-hero-copy">
              <p className="section-kicker">Contact</p>
              <h1 className="page-title">Get in touch with Matolematics</h1>
              <p className="page-description">
                Whether you’re looking for tutoring support, partnerships, or general
                information, we’d love to hear from you.
              </p>

              <div className="button-row">
                <Link href="/find-a-tutor" className="button button-primary">
                  Find a Tutor
                </Link>
                <Link href="/foundation" className="button button-secondary">
                  Foundation Support
                </Link>
              </div>
            </div>

            <div className="page-hero-panel">
              <div className="contact-summary-card">
                <h3>Quick contact</h3>

                <div className="contact-info">
                  <div>
                    <strong>Email</strong>
                    <p>info@matolematics.com</p>
                  </div>

                  <div>
                    <strong>Response time</strong>
                    <p>Typically within 24–48 hours</p>
                  </div>

                  <div>
                    <strong>Focus</strong>
                    <p>Tutoring • Partnerships • Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section">
        <div className="container">
          <div className="contact-form-panel">
            <div>
              <p className="section-kicker">Message</p>
              <h2 className="section-title">Send us a message</h2>
              <p className="section-description section-description-left">
                Fill in the form and we’ll get back to you as soon as possible.
              </p>
            </div>

            <form className="contact-form">
              <div className="form-grid">
                <div className="form-field">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>

                <div className="form-field">
                  <label>Email</label>
                  <input type="email" placeholder="Your email" />
                </div>

                <div className="form-field">
                  <label>Subject</label>
                  <select>
                    <option>Tutoring inquiry</option>
                    <option>Partnership</option>
                    <option>Foundation support</option>
                    <option>General question</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Phone (optional)</label>
                  <input type="text" placeholder="+27..." />
                </div>

                <div className="form-field form-field-wide">
                  <label>Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us how we can help you..."
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="button button-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT TYPES */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Reach out for</p>
            <h2 className="section-title">How we can help</h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <h3 className="feature-title">Tutoring support</h3>
              <p className="feature-text">
                Help finding tutors, subjects, or structured learning plans.
              </p>
            </article>

            <article className="feature-card">
              <h3 className="feature-title">Foundation access</h3>
              <p className="feature-text">
                Support requests for subsidized or sponsored tutoring.
              </p>
            </article>

            <article className="feature-card">
              <h3 className="feature-title">Partnerships</h3>
              <p className="feature-text">
                Schools, organizations, or sponsors looking to collaborate.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="find-tutor-cta">
            <div>
              <p className="section-kicker">Need help now?</p>
              <h2 className="section-title">Start with tutor matching</h2>
              <p className="section-description section-description-left">
                If you’re ready to begin, the fastest path is to request tutor
                support directly.
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