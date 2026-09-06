import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', as: Tag = 'div', delay = 0, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay) {
              el.style.transitionDelay = `${delay}ms`
            }
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
