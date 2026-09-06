import Reveal from './Reveal'

const services = [
  {
    title: 'Funnels',
    text: 'Landing pages, lead capture flows, booking experiences and conversion-focused funnels.',
  },
  {
    title: 'Automation',
    text: 'Workflows that reduce repetitive tasks and keep leads and clients moving.',
  },
  {
    title: 'CRM Systems',
    text: 'Pipeline management, contact organization, opportunity tracking and follow-up.',
  },
  {
    title: 'Lead Generation',
    text: 'Systems designed to capture, qualify and nurture leads.',
  },
  {
    title: 'Websites',
    text: 'Clean, purposeful websites built around real business goals, not generic templates.',
  },
]

export default function Services() {
  const onMove = (e) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    card.style.transform =
      `perspective(900px) rotateY(${(px * 8).toFixed(2)}deg) rotateX(${(py * -8).toFixed(2)}deg) translateY(-6px)`
  }

  const onLeave = (e) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <section className="services section" id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">What I build</span>
          <h2>Tools that quietly carry the busywork, so you can think.</h2>
        </Reveal>

        <div className="svc-grid">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div
                className="svc-card"
                onMouseMove={onMove}
                onMouseLeave={onLeave}
              >
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}