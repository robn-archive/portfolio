import Reveal from './Reveal'

const skills = ['Automation', 'Funnels', 'CRM', 'Lead Generation', 'GoHighLevel']

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <span className="kicker">About</span>
          <h2>
            The person <br />behind <span className="hl">the system.</span>
          </h2>
          <p className="about-lead"> 
            I'm Robin. I deliver conversion-focused websites, funnels, CRM
            workflows and automation built to generate qualified leads,
            streamline operations and drive measurable business growth.
          </p>
          <p className="about-lead2">
            My approach is built around conversion, not just appearance. I
            create long-term systems that turn attention into sales, support
            sustainable business growth, and keep every customer relationship
            moving through the CRM.
          </p>
        </Reveal>

        {/* <Reveal className="about-side">
          <div className="about-name">Robin Tolang</div>
          <div className="about-skills">
            {skills.map((s, i) => (
              <div className="about-skill" key={s}>
                <span>{s}</span>
                <span className="idx">0{i + 1}</span>
              </div>
            ))}
          </div>
        </Reveal> */}
      </div>
    </section>
  )
}
