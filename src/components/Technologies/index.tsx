import { useScrollReveal } from '../../hooks/useScrollReveal'
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython, FaJava } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiGo, SiMysql, SiMongodb, SiPostgresql, SiPostman, SiTailwindcss } from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";

import '../../styles/animations.css'
import './styles.css'

const technologies = [
  { name: 'React', icon: FaReact, color: '#61DAFB', highlight: false },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', highlight: false },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', highlight: false },
  { name: 'Golang', icon: SiGo, color: '#00ADD8', highlight: true },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', highlight: false },
  { name: 'Java', icon: FaJava, color: '#E22A2A', highlight: false },
  { name: 'Python', icon: FaPython, color: '#3776AB', highlight: false },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', highlight: false },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', highlight: false },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', highlight: false },
  { name: 'Docker', icon: FaDocker, color: '#2496ED', highlight: false },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', highlight: false },
  { name: 'React Native', icon: FaReact, color: '#61DAFB', highlight: false },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', highlight: false },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC', highlight: false },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', highlight: false },
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
                  <div key={index} className={`tech-card ${tech.highlight ? 'highlight' : ''}`}>
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
