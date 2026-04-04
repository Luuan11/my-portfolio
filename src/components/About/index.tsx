import { useScrollReveal } from '../../hooks/useScrollReveal'
import { FaRegUser, FaRegLightbulb } from 'react-icons/fa'
import { LuBriefcaseBusiness } from 'react-icons/lu'
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
        <h2 className={`about-title title-underline scroll-reveal ${sectionVisible ? 'is-visible' : ''}`}>
          About Me
        </h2>
        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`about-content scroll-reveal scroll-reveal-delay-1 ${contentVisible ? 'is-visible' : ''}`}
        >
          <div className="about-topic">
            <h3 className="about-topic-title">
              <FaRegUser className="topic-icon" />
              Who I Am
            </h3>
            <p>
              I'm a passionate software developer with expertise in building modern web applications. 
              My journey in tech has been driven by curiosity and a constant desire to learn and improve. 
              Specialized in frontend technologies with deep knowledge of React, TypeScript, and responsive design.
            </p>
          </div>

          <div className="about-topic">
            <h3 className="about-topic-title">
              <LuBriefcaseBusiness className="topic-icon" />
              Experience & Expertise
            </h3>
            <p>
              With experience in both frontend and backend development, I enjoy creating solutions 
              that make a real impact. I believe in writing clean, maintainable code and following 
              best practices to deliver high-quality software. Proficient in component architecture, 
              state management, and UI/UX optimization.
            </p>
          </div>

          <div className="about-topic">
            <h3 className="about-topic-title">
              <FaRegLightbulb className="topic-icon" />
              Continuous Learning
            </h3>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community. Always seeking to improve skills 
              and stay updated with industry trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
