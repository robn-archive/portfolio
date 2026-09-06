import { useRef, useState, useCallback, useEffect } from 'react'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'

export default function SelectedWork({ projects, onOpen }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const total = projects.length

  const cardW = useRef(0)
  const step = useRef(0)

  const dragging = useRef(false)
  const wasDrag = useRef(false)
  const startX = useRef(0)
  const lastX = useRef(0)
  const lastT = useRef(0)
  const velocity = useRef(0)
  const baseOffset = useRef(0)
  const offset = useRef(0)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.carousel-slide')
    cardW.current = card ? card.getBoundingClientRect().width : 0
    step.current = cardW.current + (parseFloat(getComputedStyle(track).gap) || 0)
  }, [])

  const targetOffset = useCallback((idx) => -idx * step.current, [])

  const goTo = useCallback(
    (i) => {
      const idx = Math.max(0, Math.min(total - 1, i))
      setActive(idx)
      const track = trackRef.current
      if (!track || step.current <= 0) return
      offset.current = targetOffset(idx)
      track.style.transition = ''
      track.style.transform = `translateX(${offset.current}px)`
    },
    [total, targetOffset]
  )

  const prev = () => goTo(active - 1)
  const next = () => goTo(active + 1)

  useEffect(() => {
    measure()
    let ticking = false
    const onResize = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        measure()
        const track = trackRef.current
        if (!track || step.current <= 0) return
        offset.current = targetOffset(active)
        track.style.transition = 'none'
        track.style.transform = `translateX(${offset.current}px)`
        requestAnimationFrame(() => {
          if (trackRef.current) trackRef.current.style.transition = ''
        })
        ticking = false
      })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [measure, targetOffset, active])

  const syncOffset = () => {
    const track = trackRef.current
    try {
      const m = new DOMMatrixReadOnly(getComputedStyle(track).transform)
      offset.current = m.m41
    } catch {
      offset.current = targetOffset(active)
    }
    baseOffset.current = offset.current
  }

  const onPointerDown = (e) => {
    const track = trackRef.current
    if (!track) return
    if (e.pointerType === 'mouse' && e.button !== 0) return
    dragging.current = true
    wasDrag.current = false
    startX.current = e.clientX
    lastX.current = e.clientX
    lastT.current = performance.now()
    velocity.current = 0
    if (!e.target.closest('button')) {
      track.setPointerCapture(e.pointerId)
      track.style.transition = 'none'
      syncOffset()
    }
  }

  const onPointerMove = (e) => {
    if (!dragging.current) return
    const track = trackRef.current
    if (!track) return

    const dx = e.clientX - startX.current
    const now = performance.now()
    const dt = now - lastT.current
    if (dt > 0 && dt < 60) {
      const v = (e.clientX - lastX.current) / dt
      velocity.current = 0.9 * velocity.current + 0.1 * v
    }
    lastX.current = e.clientX
    lastT.current = now

    if (!wasDrag.current && Math.abs(dx) > 6) {
      wasDrag.current = true
      track.classList.add('carousel-dragging')
      if (!track.hasPointerCapture(e.pointerId)) {
        track.setPointerCapture(e.pointerId)
      }
      track.style.transition = 'none'
      syncOffset()
    }

    offset.current = baseOffset.current + dx
    track.style.transform = `translateX(${offset.current.toFixed(3)}px)`

    if (step.current > 0) {
      const i = Math.max(0, Math.min(total - 1, Math.round(-offset.current / step.current)))
      if (i !== active) setActive(i)
    }
  }

  const endDrag = (cancelled) => {
    if (!dragging.current) return
    dragging.current = false
    const track = trackRef.current
    if (!track) return
    track.classList.remove('carousel-dragging')
    track.style.transition = ''
    if (!wasDrag.current) return

    if (cancelled) {
      wasDrag.current = false
      offset.current = targetOffset(active)
      track.style.transform = `translateX(${offset.current}px)`
      return
    }

    const projected = -offset.current + velocity.current * 180
    const idx = Math.max(0, Math.min(total - 1, Math.round(projected / step.current)))
    setActive(idx)
    offset.current = targetOffset(idx)
    track.style.transform = `translateX(${offset.current}px)`

    setTimeout(() => {
      wasDrag.current = false
    }, 400)
  }

  const onTrackClick = (e) => {
    if (wasDrag.current) {
      wasDrag.current = false
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <section className="selected-work section" id="work">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Selected work</span>
          <h2>This is where the “now what?” gets answered.</h2>
          <p>
            From the first click to the follow-up, these systems are designed
            to give every lead somewhere to go.
          </p>
        </Reveal>
      </div>

      <div className="carousel">
        <div
          className="carousel-track"
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={() => endDrag(false)}
          onPointerCancel={() => endDrag(true)}
          onClickCapture={onTrackClick}
        >
          {projects.map((p) => (
            <div className="carousel-slide" key={p.id}>
              <ProjectCard project={p} featured={p.featured} onOpen={onOpen} />
            </div>
          ))}
        </div>

        <div className="carousel-nav">
          <button
            className="carousel-arrow"
            onClick={prev}
            disabled={active === 0}
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="carousel-dots">
            {projects.map((p, i) => (
              <button
                key={p.id}
                className={`carousel-dot${i === active ? ' active' : ''}`}
                onClick={(e) => {
                  e.currentTarget.classList.add('dot-pop')
                  e.currentTarget.addEventListener(
                    'animationend',
                    () => e.currentTarget.classList.remove('dot-pop'),
                    { once: true }
                  )
                  goTo(i)
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="carousel-arrow"
            onClick={next}
            disabled={active === total - 1}
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}