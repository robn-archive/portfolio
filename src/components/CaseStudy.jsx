import { useEffect, useRef, useState } from 'react'

export default function CaseStudy({ project, onClose }) {
  const [closing, setClosing] = useState(false)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const prev = document.activeElement
    overlayRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus?.()
    }
  }, [project, onClose])

  const handleClose = () => {
    setClosing(true)
    setTimeout(onClose, 300)
  }

  if (!project) return null

  return (
    <div
      className={`modal-overlay${closing ? ' closed' : ' open'}`}
      role="dialog"
      aria-modal="true"
      aria-label="Project case study"
      ref={overlayRef}
      tabIndex={-1}
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose()
      }}
    >
      <div className="modal">
        <button className="modal-close" onClick={handleClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-hero">
          <img src={project.image} alt={project.alt || project.title} />
          <div className="modal-hero-overlay">
            <span className="work-cat">{project.shortCategory}</span>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-header">
            <span className="modal-num"><span className="slash">/</span> {project.num}</span>
            <h2>{project.title}</h2>
            <p className="modal-cat">{project.category}</p>
          </div>

          <div className="modal-grid">
            <div className="modal-col">
              <div className="modal-section">
                <h4>The problem</h4>
                <p>{project.problem}</p>
              </div>

              <div className="modal-section">
                <h4>The approach</h4>
                <p>{project.approach}</p>
              </div>

              <div className="modal-section">
                <h4>The result</h4>
                <p>{project.result}</p>
              </div>
            </div>

            <div className="modal-col">
              <div className="modal-section">
                <h4>How it works</h4>
                <p>{project.systemNotes}</p>
                <div className="modal-flow">
                  {project.flow.map((step, i) => (
                    <span key={step} className="flow-group">
                      <span className={`step${i === 0 ? ' accent' : ''}`}>{step}</span>
                      {i < project.flow.length - 1 && <span className="arrow">→</span>}
                    </span>
                  ))}
                </div>
              </div>

              {project.highlights && (
                <div className="modal-section">
                  <h4>Key features</h4>
                  <ul className="modal-list">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="modal-section modal-tools-section">
            <h4>Tools</h4>
            <div className="modal-tools">
              {project.tools.map((tool) => (
                <span className="tool" key={tool}>{tool}</span>
              ))}
            </div>
            {project.tags && (
              <div className="modal-tools modal-tags">
                {project.tags.map((t) => (
                  <span className="tool tag" key={t}>{t}</span>
                ))}
              </div>
            )}
          </div>

          <div className="modal-actions">
            <a href="#contact" className="btn btn-primary" onClick={handleClose}>
              Start a project <span className="arrow">↗</span>
            </a>
            <button className="btn btn-ghost" onClick={handleClose}>
              Back to work
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
