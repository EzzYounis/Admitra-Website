import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const animatableElements = document.querySelectorAll(
      '.section, .impact-card, .pillar-card, .screen, .process-line article'
    )

    animatableElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
