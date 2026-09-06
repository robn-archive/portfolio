import { useEffect } from 'react'

const eyebrow = 'SALES · CRM · WEBSITES · AUTOMATION'

const flow = [
  { label: 'Website', desc: 'Captures attention' },
  { label: 'Sales system', desc: 'Turns leads into opportunities' },
  { label: 'CRM', desc: 'Organizes and manages' },
  { label: 'Automation', desc: 'Keeps it moving' },
  { label: 'Funnel', desc: 'Connects the journey' },
]

export default function Hero() {
  useEffect(() => {
    const el = document.querySelector('.hero')
    if (el) requestAnimationFrame(() => el.classList.add('loaded'))
  }, [])

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-glow-1" aria-hidden="true"></div>
      <div className="hero-glow-2" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="dot" aria-hidden="true"></span>
            {eyebrow}
          </p>

          <h1>
            <span className="line">
              <span>Your leads are</span>
            </span>
            <span className="line">
              <span>coming in.</span>
            </span>
            <span className="line">
              <span>Now what?</span>
            </span>
          </h1>

          <p className="hero-lead">That's where things get interesting.</p>

          <p className="hero-sub">
            I connect websites, funnels, CRM, and automation into sales
            systems that capture leads, keep follow-up moving, and give every
            opportunity somewhere to go.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-accent">
              View my work <span className="arrow">↗</span>
            </a>
            <a href="#contact" className="btn btn-accent">
              Let's talk
            </a>
          </div>
        </div>

        <div className="hero-flow" aria-hidden="true">
          {flow.map((f, i) => (
            <div
              className="flow-float"
              key={f.label}
              style={{ animationDelay: `${0.6 + i * 0.12}s` }}
            >
              <div className="flow-card">
                <span className="flow-num">0{i + 1}</span>
                <span className="flow-label">{f.label}</span>
                <span className="flow-desc">{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}