import { useScrollReveal } from '../../hooks/useScrollReveal'
import '../../styles/animations.css'
import './styles.css'

export function About() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollReveal()
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal()

  return (
    <section 
      id="about" 
      className="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="about-container">
        <h2 className={`section-title scroll-reveal ${sectionVisible ? 'is-visible' : ''}`}>
          About Me
        </h2>
        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`about-content scroll-reveal scroll-reveal-delay-1 ${contentVisible ? 'is-visible' : ''}`}
        >
          <p>
            I'm a passionate software developer with expertise in building modern web applications. 
            My journey in tech has been driven by curiosity and a constant desire to learn and improve.
          </p>
          <p>
            With experience in both frontend and backend development, I enjoy creating solutions 
            that make a real impact. I believe in writing clean, maintainable code and following 
            best practices to deliver high-quality software.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, contributing to open source, 
            or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  )
}
