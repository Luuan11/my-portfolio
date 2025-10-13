import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/animations.css'
import './Education.css'

export function Education() {
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollReveal()

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
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
