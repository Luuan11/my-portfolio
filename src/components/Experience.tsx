import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/animations.css'
import './Experience.css'

export function Experience() {
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollReveal()

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-content">
          <div 
            ref={cardRef as React.RefObject<HTMLDivElement>}
            className={`experience-card scroll-reveal scroll-reveal-delay-1 ${cardVisible ? 'is-visible' : ''}`}
          >
            <div className="card-header">
              <div>
                <h4 className="company-name">Mercado Libre</h4>
                <h3 className="card-title">Software Developer</h3>
              </div>
              <div className="card-meta">
                <p className="card-date">Mar 2024 • Present</p>
                <p className="card-location">Brazil</p>
              </div>
            </div>

            <div className="card-body">
              <p className="card-description">
                As a Software Developer, I work with system development, maintenance, and improvement - Programming languages: Java, Go, Typescript. - Databases: MySQL, PostgreSQL, SQL Server. - Development tools (IDEs): Visual Studio Code, IntelliJ IDEA, Goland IDEA. - Infrastructure and observability: Docker, Kubernetes, Kibana, Grafana. - Testing and quality: Postman, Coverage 80%. - Automation and CI/CD: Jenkins, GitHub Actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
