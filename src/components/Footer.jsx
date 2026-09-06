export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="name">Robin Tolang</div>
            <div className="sub">Automation · Funnels · Systems</div>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a
              className="footer-email"
              // href="https://mail.google.com/mail/?view=cm&fs=1&to=robytolang@gmail.com&su=Project%20inquiry"
              href="mailto:robytolang@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Robin Tolang"
            >
              robytolang@gmail.com
            </a>
            <a
              href="#contact"
              aria-label="Open contact section"
            >
              Let's talk ↗
            </a>
          </div>

          <div className="footer-col">
            <h4>Elsewhere</h4>
            <a
              href="https://www.linkedin.com/in/robin-euclid-tolang-301127420/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="statement">Built with intention.</span>
          <p>© {year} Robin Tolang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
