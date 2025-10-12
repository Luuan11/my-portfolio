import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiGo, SiMysql, SiMongodb, SiPostgresql } from 'react-icons/si'
import '../styles/animations.css'
import './Technologies.css'

const technologies = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Golang', icon: SiGo, color: '#00ADD8' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
]

export function Technologies() {
  const { elementRef, isVisible } = useScrollReveal()

  return (
    <section className="technologies" id="technologies">
      <div 
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className={`technologies-container scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="technologies-title">Technologies & Tools</h2>
        <div className="carousel-wrapper">
          <div className="carousel">
            <div className="carousel-track">
              {[...technologies, ...technologies].map((tech, index) => {
                const Icon = tech.icon
                return (
                  <div key={index} className="tech-card">
                    <Icon className="tech-icon" style={{ color: tech.color }} />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
