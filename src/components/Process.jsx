import Reveal from './Reveal'

const steps = [
  {
    num: '01',
    title: 'Discover',
    text: 'Understand the business, offer, audience and bottleneck.',
  },
  {
    num: '02',
    title: 'Design',
    text: 'Create the user journey and conversion architecture.',
  },
  {
    num: '03',
    title: 'Build',
    text: 'Develop the website, funnel, CRM and automation.',
  },
  {
    num: '04',
    title: 'Connect',
    text: 'Connect forms, calendars, pipelines, email and workflows.',
  },
  {
    num: '05',
    title: 'Optimize',
    text: 'Improve the experience based on behavior and performance.',
  },
]

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">How I work</span>
          <h2>From first conversation to a system that runs on its own.</h2>
        </Reveal>

        <div className="proc-list">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 70}>
              <div className="proc-item">
                <span className="num">{s.num}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="proc-down" aria-hidden="true"></div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}