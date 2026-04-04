import { useEffect, useRef, useState, useMemo } from 'react'
import { ANIMATION_CONFIG } from '../constants/config'

export function useScrollReveal(options: Partial<IntersectionObserverInit> = {}) {
  const elementRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const observerConfig = useMemo(() => ({
    threshold: ANIMATION_CONFIG.SCROLL_REVEAL_THRESHOLD,
    rootMargin: ANIMATION_CONFIG.SCROLL_REVEAL_MARGIN,
    ...options,
  }), [options])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observerRef.current?.unobserve(element)
        }
      },
      observerConfig
    )

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element)
      }
    }
  }, [observerConfig])

  return { elementRef, isVisible }
}
