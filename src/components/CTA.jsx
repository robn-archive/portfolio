import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <Reveal>
          <h2>
            Let's build <span className="hl">something useful.</span>
          </h2>
          <p>
            Got a funnel, website, or workflow that needs a rethink? I'd like
            to hear about it.
          </p>
          <div className="cta-actions">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=robytolang@gmail.com&su=Project%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Start a project <span className="arrow">↗</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=robytolang@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Email me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
