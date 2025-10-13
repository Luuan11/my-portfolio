import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/animations.css'
import './Projects.css'

export function Projects() {
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollReveal()

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div 
          ref={cardRef as React.RefObject<HTMLDivElement>}
          className={`building-message scroll-reveal ${cardVisible ? 'is-visible' : ''}`}
        >
          <h3>Building...</h3>
        </div>
      </div>
    </section>
  )
}
