import { useScrollReveal } from '../../hooks/useScrollReveal'
import { FaCode } from 'react-icons/fa'
import { technologies, skills } from './data'
import { TechCarousel } from './components/TechCarousel'
import { SkillsGrid } from './components/SkillsGrid'
import '../../styles/animations.css'
import './styles.css'

export function TechnologiesAndSkills() {
  const { elementRef: techRef, isVisible: techVisible } = useScrollReveal()
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollReveal()

  return (
    <section className="technologies-and-skills" id="skills">
      <div className="tech-skills-wrapper">
        <div 
          ref={techRef as React.RefObject<HTMLDivElement>}
          className={`technologies-container scroll-reveal ${techVisible ? 'is-visible' : ''}`}
        >
          <h2 className="technologies-title">Technologies & Skills</h2>
          <p className="technologies-description">
            My technical stack encompasses modern frameworks, programming languages, and tools that enable me to build robust, scalable applications across full-stack development.
          </p>
          <TechCarousel technologies={technologies} />
        </div>

        <div 
          ref={skillsRef as React.RefObject<HTMLDivElement>}
          className={`skills-container scroll-reveal ${skillsVisible ? 'is-visible' : ''}`}
        >
          <h3 className="skills-title">
            <FaCode className="skills-icon" />
            Skills
          </h3>
          <SkillsGrid skills={skills} />
        </div>
      </div>
    </section>
  )
}
