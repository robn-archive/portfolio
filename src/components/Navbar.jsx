import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }}></div>
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={close}>
          <span className="name">ROBIN</span>
          <span className="sub">Automation · Funnels · Systems</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#work">WORK</a>
          <a href="#services">SERVICES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary btn-auto">
            Let's talk <span className="arrow">↗</span>
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          <a href="#work" onClick={close}>WORK</a>
          <a href="#services" onClick={close}>SERVICES</a>
          <a href="#process" onClick={close}>PROCESS</a>
          <a href="#about" onClick={close}>ABOUT</a>
          <a href="#contact" onClick={close}>CONTACT</a>
        </nav>
      )}
    </header>
  )
}
