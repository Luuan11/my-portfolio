import { useRef, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../../styles/animations.css'
import './styles.css'

const projects = [
  {
    title: 'clean-architecture-go',
    description: 'Clean architecture order management with golang.',
    image: 'https://github.com/user-attachments/assets/b2cf052e-9e03-44f9-9c6e-1ba5cfcf9a86',
    technologies: ['Golang', 'Clean Architecture', 'MySQL', 'GraphQL', 'gRPC', 'Docker'],
    githubUrl: 'https://github.com/Luuan11/clean-architecture-go',
  },
  {
    title: 'Stress-test',
    description: 'Command line tool that allows you to test the performance of APIs and web services by performing multiple simultaneous requests.',
    image: 'https://github.com/user-attachments/assets/9d2785b9-a7a9-467f-a1cc-770cd7bde652',
    technologies: ['Golang', 'Docker'],
    githubUrl: 'https://github.com/Luuan11/stress-test-go',
  },
  {
    title: 'go-meteor',
    description: 'Game App made with GO and Ebiten packet.',
    image: 'https://github.com/user-attachments/assets/452a33eb-706a-4f76-ab61-69aa30240440',
    technologies: ['Golang', 'Ebiten'],
    githubUrl: 'https://github.com/Luuan11/go-meteor',
    liveUrl: 'https://luuan11.github.io/go-meteor/',
  }
]

export function Projects() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`project-card scroll-reveal scroll-reveal-delay-${(index % 3) + 1}`}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
