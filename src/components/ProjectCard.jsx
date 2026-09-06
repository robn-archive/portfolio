import { useRef } from 'react'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, onOpen, featured }) {
  const cardRef = useRef(null)

  const onMove = (e) => {
    const card = cardRef.current
    if (!card) return
    if (card.closest('.carousel-dragging')) return
    const r = card.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    card.style.transform =
      `perspective(900px) rotateY(${(px * 6).toFixed(2)}deg) rotateX(${(py * -6).toFixed(2)}deg) translateY(-3px)`
  }

  const onLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = ''
  }

  return (
    <button
      ref={cardRef}
      className={`work-item${featured ? ' work-featured' : ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(project)}
      aria-label={`Open case study: ${project.title}`}
    >
      <div className="work-head">
        <div className="work-meta">
          <span className="work-num">
            <span className="slash">/</span> {project.num}
          </span>
          <span className="work-cat">{project.shortCategory}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="work-visual">
        <ProjectVisual image={project.image} alt={project.alt} />
      </div>

      <div className="work-link-row">
        View case study <span className="arrow">↗</span>
      </div>
    </button>
  )
}