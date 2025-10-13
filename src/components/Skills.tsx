import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa'
import { MdDevices } from 'react-icons/md'
import { BiGitBranch } from 'react-icons/bi'
import { RiPencilRulerLine } from 'react-icons/ri'
import '../styles/animations.css'
import './Skills.css'

const skills = [
  {
    icon: FaCode,
    title: 'Front-end Development',
    description: 'Expert in React, TypeScript, JavaScript, building modern and responsive interfaces',
    highlight: false
  },
  {
    icon: FaServer,
    title: 'Back-end Development',
    description: 'Proficient in Golang, Java, creating robust and scalable APIs',
    highlight: true
  },
  {
    icon: FaDatabase,
    title: 'Database Management',
    description: 'Experience with MySQL, MongoDB, PostgreSQL for efficient data solutions',
    highlight: false
  },
  {
    icon: BiGitBranch,
    title: 'Version Control',
    description: 'Git expert for versioning, collaboration and CI/CD workflows',
    highlight: false
  },
  {
    icon: MdDevices,
    title: 'DevOps & Containers',
    description: 'Docker and Kubernetes for containerization and orchestration of applications',
    highlight: false
  },
  {
    icon: RiPencilRulerLine,
    title: 'Testing & Quality',
    description: 'Automated testing with JUnit, Jest, ensuring code reliability',
    highlight: false
  }
]

export function Skills() {
  const { elementRef, isVisible } = useScrollReveal()

  return (
    <section className="skills" id="skills">
      <div 
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className={`skills-container scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="skills-title">
          Skills
        </h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div 
                key={index} 
                className={`skill-card ${skill.highlight ? 'highlighted' : ''}`}
              >
                <div className="skill-icon-wrapper">
                  <Icon className="skill-icon" />
                </div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
