import { MarkMonogramM } from "./MarkMonogramM";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <a href="/" className="nav-logo" aria-label="MatrixInn Solutions home">
              <MarkMonogramM size={32} color="var(--ink)" accent="var(--blue)" />
              <span className="nav-logo-text">
                MATRIX<span className="accent">INN</span>
              </span>
            </a>
            <p>
              A small software studio building extensions, web, mobile, and SaaS
              for teams who care about the details.
            </p>
          </div>
          <div className="footer-col">
            <h5>Build</h5>
            <ul>
              <li><a href="/#services">Browser extensions</a></li>
              <li><a href="/#services">Web applications</a></li>
              <li><a href="/#services">Mobile apps</a></li>
              <li><a href="/#services">SaaS products</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Studio</h5>
            <ul>
              <li><a href="/#about">About</a></li>
              <li><a href="/#process">Process</a></li>
              <li><a href="/#work">Work</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <ul>
              <li><a href="mailto:contact@matrixinnsolutions.com">contact@matrixinnsolutions.com</a></li>
              <li><a href="https://github.com/huzaifa-01" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MATRIXINN SOLUTIONS</span>
          <span>BUILT IN-HOUSE · REMOTE-FIRST · GLOBAL</span>
        </div>
      </div>
    </footer>
  );
}
