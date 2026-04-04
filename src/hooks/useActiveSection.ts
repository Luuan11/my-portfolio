import { useEffect, useState } from 'react'
import { SCROLL_CONFIG } from '../constants/config'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: SCROLL_CONFIG.OBSERVER_ROOT_MARGIN,
      threshold: SCROLL_CONFIG.OBSERVER_THRESHOLD
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section with the highest intersection ratio
      let mostVisibleEntry = entries[0]
      let maxRatio = mostVisibleEntry?.intersectionRatio || 0

      entries.forEach(entry => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          mostVisibleEntry = entry
        }
      })

      if (mostVisibleEntry) {
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
