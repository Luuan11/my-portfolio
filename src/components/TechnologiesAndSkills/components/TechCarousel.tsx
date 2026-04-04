import { useState, useRef, useEffect } from 'react'
import { Technology } from '../data'
import { TechCard } from './TechCard'

interface TechCarouselProps {
  technologies: Technology[]
}

export function TechCarousel({ technologies }: TechCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const visibleCount = 6
  const maxIndex = Math.max(0, technologies.length - visibleCount)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollAmount = (currentIndex / technologies.length) * (container.scrollWidth - container.clientWidth)
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' })
  }, [currentIndex, technologies.length])

  return (
    <div className="tech-carousel-wrapper">
      <button className="carousel-nav carousel-nav-prev" onClick={handlePrev} aria-label="Previous technologies">
        ←
      </button>
      <div className="tech-carousel" ref={containerRef}>
        {technologies.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
      <button className="carousel-nav carousel-nav-next" onClick={handleNext} aria-label="Next technologies">
        →
      </button>
    </div>
  )
}
