import { useState, useCallback, useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useScrollReveal } from '../../hooks/useScrollReveal'
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
    image: '/images/projects/clean-arch.png',
    technologies: ['Golang', 'Clean Architecture', 'MySQL', 'GraphQL', 'gRPC', 'Docker'],
    githubUrl: 'https://github.com/Luuan11/clean-architecture-go',
  },
  {
    title: 'Stress-test',
    description: 'Command line tool that allows you to test the performance of APIs and web services by performing multiple simultaneous requests. Built for developers who need reliable performance testing.',
    image: '/images/projects/stress-test.png',
    technologies: ['Golang', 'Docker'],
    githubUrl: 'https://github.com/Luuan11/stress-test-go',
  },
  {
    title: 'go-meteor',
    description: 'Game App made with GO and Ebiten packet. An interactive gaming experience showcasing the power of Go for game development with smooth animations and responsive controls.',
    image: '/images/projects/go-meteor.png',
    technologies: ['Golang', 'Ebiten'],
    githubUrl: 'https://github.com/Luuan11/go-meteor',
    liveUrl: 'https://luuan11.github.io/go-meteor/',
  },
  {
    title: 'Discord Purple',
    description: 'A real-time chat application inspired by Discord. Users authenticate securely with GitHub OAuth, ensuring no one can impersonate another user. Send messages and stickers instantly, and see other users\' messages in real-time. The app features a modern UI with a space-themed background, custom scrollbar, and GitHub profile integration.',
    image: '/images/projects/discord-purple.png',
    technologies: ['Next.js', 'Firebase', 'SkyneXUI', 'GitHub OAuth', 'Vercel'],
    githubUrl: 'https://github.com/Luuan11/discordpurple',
    liveUrl: 'https://discordpurple.vercel.app/',
  }
]

const useProjectCarousel = (totalItems: number): CarouselControls => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goToIndex = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex)
    setIsAnimating(true)
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current)
    }
    transitionTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
    }, 250)
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % totalItems)
  }, [totalItems])

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + totalItems) % totalItems)
  }, [totalItems])

  const handleDotClick = useCallback((index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index)
    }
  }, [currentIndex])

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
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalItems)
    }, 5000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
    }
  }, [totalItems])

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
  
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal()
  
  const currentProject = projects[currentIndex]

  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <div className="projects-container">
        <h2 
          id="projects-heading" 
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`projects-title title-underline ${titleVisible ? 'is-visible' : ''}`}
        >
          Projects
        </h2>
        <p className="projects-description">
          A showcase of my portfolio projects featuring modern architectures, clean code practices, and cutting-edge technologies that demonstrate my expertise in full-stack development.
        </p>

        <div
          className="project-showcase"
          role="region"
          aria-live="polite"
          aria-atomic="true"
          aria-label={`Project carousel showing ${currentProject.title}`}
        >
          <div 
            id={`project-${currentIndex}`}
            className={`project-display ${isAnimating ? 'animating' : ''}`}
          >
            <div className="project-image-section">
              <img 
                src={currentProject.image} 
                alt={`Screenshot of ${currentProject.title} project`}
                className="showcase-image"
                loading="lazy"
                width="600"
                height="400"
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

