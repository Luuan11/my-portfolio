import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/animations.css'
import './Experience.css'

const companies = [
  {
    name: 'Mercado Libre',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQE4q-iBP4fZ0g/company-logo_200_200/B4DZUUipIKG8AI-/0/1739806380950/mercadolivre_com_logo?e=1762992000&v=beta&t=hvMhAYLxoojW9qQPudPQFtAxIYxmnDaklaumByPu72o',
    position: 'Software Developer',
    period: 'Mar 2024 • Present',
    location: 'Brazil',
    experiences: [
      {
        team: 'CX Verdi',
        period: 'Aug 2025 • Present',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        technologies: ['Java', 'Go', 'TypeScript', 'MySQL', 'PostgreSQL', 'Docker', 'Kubernetes']
      },
      {
        team: 'Meliphone',
        period: 'Jun 2025 • Aug 2025',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        technologies: ['Java', 'Go', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes']
      },
      {
        team: 'CX Socials',
        period: 'Nov 2024 • Aug 2025',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        technologies: ['Java', 'TypeScript', 'MySQL', 'Docker', 'Jenkins', 'GitHub Actions']
      },
      {
        team: 'CX Offline',
        period: 'Mar 2024 • Nov 2024',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        technologies: ['Java', 'Go', 'MySQL', 'PostgreSQL', 'Docker', 'Kubernetes']
      },
    ]
  },
  {
    name: 'Cotecna Inspection',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFArlScTeSOGw/company-logo_200_200/company-logo_200_200/0/1631354712883?e=1762992000&v=beta&t=2AjaujZKLf0IicEvtuseY-rKJj1o2XYkFp36-Cd9mrc',
    position: 'IT Analyst',
    period: 'Jan 2022 • Mar 2024',
    location: 'Brazil',
    experiences: [
      {
        team: 'IT Analyst',
        period: 'Jan 2024 • Mar 2024',
        promoted: true,
        description: 'I worked as an Analyst responsible for IT at Cotecna Level Brazil, managing technical support requests, providing devices to employees, overseeing and controlling the IT budget in Brazil, and coordinating multiple external IT teams. I was also involved in strategic decision-making for IT and the development of web applications.',
        technologies: ['Python', 'SQL Server', 'Windows Server', 'PHP', 'Backups', 'IT Management']
      },
      {
        team: 'IT Intern',
        period: 'Jan 2022 • Dez 2023',
        description: 'I worked as an IT intern at Cotecna Level Brazil, assisting employees with technical issues, managing company equipment to ensure proper use, and supporting the financial management of IT operations in Brazil.',
        technologies: ['Python', 'SQL Server', 'Hardware', 'Networking']
      },
    ]
  }
]

export function Experience() {
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollReveal()
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experiences</h2>
        <div className="experience-content">
          {companies.map((company, companyIndex) => (
            <div 
              key={companyIndex}
              ref={cardRef as React.RefObject<HTMLDivElement>}
              className={`experience-card scroll-reveal scroll-reveal-delay-${companyIndex + 1} ${cardVisible ? 'is-visible' : ''}`}
            >
              <div className="card-header">
                <div className="company-info">
                  <div className="company-logo">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} Logo`} 
                    />
                  </div>
                  <div>
                    <h4 className="company-name">{company.name}</h4>
                    <h3 className="card-title">{company.position}</h3>
                  </div>
                </div>
                <div className="card-meta">
                  <p className="card-date">{company.period}</p>
                  <p className="card-location">{company.location}</p>
                </div>
              </div>

              <div className={`card-body ${expandedCards.includes(companyIndex) ? 'expanded' : ''}`}>
                <div className="timeline">
                  {company.experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <div className="timeline-title-wrapper">
                            <h4 className="timeline-team">{exp.team}</h4>
                            {exp.promoted && (
                              <span className="promoted-badge">
                                <svg 
                                  width="14" 
                                  height="14" 
                                  viewBox="0 0 24 24" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                Promoted
                              </span>
                            )}
                          </div>
                          <span className="timeline-period">{exp.period}</span>
                        </div>
                        <p className="timeline-description">{exp.description}</p>
                        <div className="timeline-technologies">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                className="expand-button"
                onClick={() => toggleCard(companyIndex)}
                aria-label={expandedCards.includes(companyIndex) ? "Collapse" : "Expand"}
              >
                <svg 
                  className={`expand-icon ${expandedCards.includes(companyIndex) ? 'expanded' : ''}`}
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
