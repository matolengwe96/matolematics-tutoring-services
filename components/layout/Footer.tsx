import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand" aria-label="Matolematics home">
            <Image
              src="/brand/logo.png"
              alt="Matolematics Tutoring Service"
              width={220}
              height={60}
              className="footer-brand-image"
            />
          </Link>
          <p className="footer-text">
            World-class tutoring, accessible to everyone.
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Platform</h4>
          <ul className="footer-list">
            <li>
              <Link href="/find-a-tutor" className="footer-link">
                Find a Tutor
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="footer-link">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/ai-study-assistant" className="footer-link">
                AI Study Assistant
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-list">
            <li>
              <Link href="/about" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/founder" className="footer-link">
                Founder
              </Link>
            </li>
            <li>
              <Link href="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Access</h4>
          <ul className="footer-list">
            <li>
              <Link href="/foundation" className="footer-link">
                Apply for Support
              </Link>
            </li>
            <li className="footer-text">Privacy</li>
            <li className="footer-text">Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}