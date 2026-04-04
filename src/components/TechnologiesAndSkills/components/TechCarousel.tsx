import { useMemo } from 'react'
import type { Technology } from '../data'
import { TechCard } from './TechCard'

interface TechCarouselProps {
  technologies: Technology[]
}

export function TechCarousel({ technologies }: TechCarouselProps) {
  const duplicatedTechs = useMemo(() => {
    
    return [...technologies, ...technologies]
  }, [technologies])

  return (
    <div className="tech-carousel-wrapper">
      <div className="tech-carousel">
        <div className="carousel-track">
          {duplicatedTechs.map((tech, idx) => (
            <TechCard key={`${tech.name}-${idx}`} {...tech} />
          ))}
        </div>
      </div>
    </div>
  )
}
