import { useState, useCallback, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../../styles/animations.css'
import './styles.css'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

interface CarouselControls {
  currentIndex: number
  isAnimating: boolean
  handleNext: () => void
  handlePrev: () => void
  handleDotClick: (index: number) => void
}

const projects: Project[] = [
  {
    title: 'clean-architecture-go',
    description: 'Clean architecture order management with golang. Features advanced patterns and best practices for building scalable and maintainable applications.',
    image: 'https://github.com/user-attachments/assets/b2cf052e-9e03-44f9-9c6e-1ba5cfcf9a86',
    technologies: ['Golang', 'Clean Architecture', 'MySQL', 'GraphQL', 'gRPC', 'Docker'],
    githubUrl: 'https://github.com/Luuan11/clean-architecture-go',
  },
  {
    title: 'Stress-test',
    description: 'Command line tool that allows you to test the performance of APIs and web services by performing multiple simultaneous requests. Built for developers who need reliable performance testing.',
    image: 'https://github.com/user-attachments/assets/9d2785b9-a7a9-467f-a1cc-770cd7bde652',
    technologies: ['Golang', 'Docker'],
    githubUrl: 'https://github.com/Luuan11/stress-test-go',
  },
  {
    title: 'go-meteor',
    description: 'Game App made with GO and Ebiten packet. An interactive gaming experience showcasing the power of Go for game development with smooth animations and responsive controls.',
    image: 'https://github.com/user-attachments/assets/452a33eb-706a-4f76-ab61-69aa30240440',
    technologies: ['Golang', 'Ebiten'],
    githubUrl: 'https://github.com/Luuan11/go-meteor',
    liveUrl: 'https://luuan11.github.io/go-meteor/',
  }
]

const useProjectCarousel = (totalItems: number): CarouselControls => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
  }, [])

  const handleNext = useCallback(() => {
    if (isAnimating) return
    startAnimation()
    setCurrentIndex((prev) => (prev + 1) % totalItems)
  }, [isAnimating, totalItems, startAnimation])

  const handlePrev = useCallback(() => {
    if (isAnimating) return
    startAnimation()
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }, [isAnimating, totalItems, startAnimation])

  const handleDotClick = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return
    startAnimation()
    setCurrentIndex(index)
  }, [isAnimating, currentIndex, startAnimation])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrev()
      } else if (event.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrev])

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(autoPlayInterval)
  }, [handleNext])

  return {
    currentIndex,
    isAnimating,
    handleNext,
    handlePrev,
    handleDotClick,
  }
}

export function Projects() {
  const { currentIndex, isAnimating, handleNext, handlePrev, handleDotClick } = 
    useProjectCarousel(projects.length)
  
  const currentProject = projects[currentIndex]

  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <div className="projects-container">
        <h2 id="projects-heading" className="projects-title">
          Projects
        </h2>

        <div
          className="project-showcase"
          role="region"
          aria-live="polite"
          aria-atomic="true"
          aria-label={`Project carousel showing ${currentProject.title}`}
        >
          <div className={`project-display ${isAnimating ? 'animating' : ''}`}>
            <div className="project-image-section">
              <img 
                src={currentProject.image} 
                alt={`Screenshot of ${currentProject.title} project`}
                className="showcase-image" 
              />
            </div>

            <div className="project-info-section">
              <h3 className="showcase-title">{currentProject.title}</h3>
              <p className="showcase-description">{currentProject.description}</p>
              
              <div className="showcase-technologies" role="list" aria-label="Technologies used">
                {currentProject.technologies.map((tech) => (
                  <span key={tech} className="tech-tag" role="listitem">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="showcase-actions">
                {currentProject.liveUrl && (
                  <a 
                    href={currentProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-button"
                    aria-label={`View live demo of ${currentProject.title}`}
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    <span>View Project</span>
                  </a>
                )}
                {currentProject.githubUrl && (
                  <a 
                    href={currentProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-button"
                    aria-label={`View source code of ${currentProject.title} on GitHub`}
                  >
                    <FaGithub aria-hidden="true" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <nav 
            className="project-navigation" 
            aria-label="Project carousel navigation"
          >
            <button 
              onClick={handlePrev} 
              className="nav-arrow"
              disabled={isAnimating}
              aria-label="Previous project"
              type="button"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>

            <div className="nav-dots" role="tablist" aria-label="Project indicators">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  onClick={() => handleDotClick(index)}
                  className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
                  disabled={isAnimating}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to project ${index + 1}: ${project.title}`}
                  aria-controls={`project-${index}`}
                  type="button"
                />
              ))}
            </div>

            <button 
              onClick={handleNext} 
              className="nav-arrow"
              disabled={isAnimating}
              aria-label="Next project"
              type="button"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </section>
  )
}

