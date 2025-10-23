import { useState, useRef, useEffect } from 'react'
import '../../styles/animations.css'
import './styles.css'

const companies = [
  {
    name: 'Mercado Libre',
    logo: '/src/assets/images/mercadolivre.jpeg',
    position: 'Software Developer',
    period: 'Mar 2024 • Present',
    location: 'Brazil',
    experiences: [
      {
        team: 'Software Developer',
        description: 'As a Software Developer, I worked on resolving legacy issues in large-scale applications with high responsibility for CX within the Mercado Libre ecosystem, spanning multiple countries across Latin America. I was responsible for integrating social media platforms — including Twitter/X, Facebook, and Instagram — by developing a unified online communication system that expanded support channels and strengthened the bridge between users and representatives, resulting in faster response times and more personalized customer experiences. I also developed an integration with Twilio for telephony services, enabling automatic call transcription and using that data as intelligent context for the next representative in case of call transfers. This solution led to a 9% reduction in Average Handling Time (AHT), significantly improving service efficiency. Currently, I am focused on the development of MCPs and autonomous agents integrated with Verdi, applying LLMs for automated interpretation and resolution of support requests.',
        technologies: ['Golang', 'Java', 'Git', 'NoSQL', 'MySQL', 'Datadog', 'Grafana', 'Docker', 'CI/CD', 'Jenkins']
      },
    ]
  },
  {
    name: 'Cotecna Inspection',
    logo: '/src/assets/images/cotecna.jpeg',
    position: 'IT Analyst',
    period: 'Jan 2022 • Mar 2024',
    location: 'Brazil',
    experiences: [
      {
        team: 'IT Analyst',
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
  const [expandedCards, setExpandedCards] = useState<number[]>([])
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])

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

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

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
              ref={(el) => (experienceRefs.current[companyIndex] = el)}
              className={`experience-card scroll-reveal scroll-reveal-delay-${companyIndex + 1}`}
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
                            {'promoted' in exp && exp.promoted && (
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
                          {'period' in exp && <span className="timeline-period">{exp.period}</span>}
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
                aria-label={expandedCards.includes(companyIndex) ? `Collapse ${company.name} experience details` : `Expand ${company.name} experience details`}
                aria-expanded={expandedCards.includes(companyIndex)}
                tabIndex={0}
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
