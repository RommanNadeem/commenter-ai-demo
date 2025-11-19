import Link from "next/link";

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-shell footer-content">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">
              Commenter AI
            </Link>
            <p className="footer-text">
              Turn every LinkedIn comment and DM into measurable sales you can steer.
            </p>
            <p className="footer-meta">Commenter AI is a social CRM for LinkedIn-first sellers.</p>
          </div>

          <div>
            <p className="footer-heading">Product</p>
            <ul>
              <li>
                <Link href="/">Overview</Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Company</p>
            <ul>
              <li>
                <Link href="/brand-voice-guidelines">About</Link>
              </li>
              <li>
                <a href="mailto:hello@commenter.ai">Contact</a>
              </li>
              <li>
                <Link href="/resources">Learn</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Legal</p>
            <ul>
              <li>
                <Link href="#">Privacy</Link>
              </li>
              <li>
                <Link href="#">Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Commenter AI. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Data Practices</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
