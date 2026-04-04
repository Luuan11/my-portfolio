import { useEffect, useState } from 'react'
import { SCROLL_CONFIG } from '../constants/config'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (window.scrollY < SCROLL_CONFIG.SCROLL_THRESHOLD) {
      setActiveSection('home')
    }

    const observerOptions = {
      root: null,
      rootMargin: SCROLL_CONFIG.OBSERVER_ROOT_MARGIN,
      threshold: SCROLL_CONFIG.OBSERVER_THRESHOLD
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let mostVisibleEntry = entries[0]
      let maxRatio = 0

      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          mostVisibleEntry = entry
        }
      })

      if (mostVisibleEntry && mostVisibleEntry.isIntersecting) {
        const sectionId = mostVisibleEntry.target.id || 'home'
        setActiveSection(sectionId)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return activeSection
}
