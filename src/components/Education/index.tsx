import { useState, useRef, useEffect } from 'react'
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import '../../styles/animations.css'
import './styles.css'

const academicEducation = [
   {
    institution: 'Full Cycle',
    degree: "Postgraduate Degree in Go Expert",
    period: '2024 - 2025',
    location: 'Brazil',
    description: "During my postgraduate studies in Full Cycle Go Expert, I deepened my knowledge in advanced and scalable development with Go, covering topics such as fundamentals of the language and standard packages, context management and scope control, database integration using SQLC, project packaging and modularization, unit, integration, and benchmark testing, and the development of REST, GraphQL, and gRPC APIs. The program also included concurrency with goroutines and channels, event handling and asynchronous processing, private modules and dependency management, file uploads to AWS S3, CLI creation with Cobra, application of Unit of Work and Dependency Injection patterns, implementation of Clean Architecture principles, and deployment with Docker and Kubernetes. This course provided a comprehensive, hands-on education focused on building robust and efficient applications in Go.",
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQHwahyQD-Rolg/company-logo_100_100/company-logo_100_100/0/1630578196249?e=1763596800&v=beta&t=jxeguO3k11JsxLp3QY8bvpFPtmmlIZftl2a6Cj9Btdo'
  },
  {
    institution: 'Uninove Nove de Julho',
    degree: "Bachelor's Degree in Information Systems",
    period: '2019 - 2023',
    location: 'Brazil',
    description: "During my Bachelor's degree in Information Systems, I gained experience with a wide range of technologies and tools used in software development and IT management. Some of the main technologies I learned include programming languages such as Java, Python, C#, PHP, and JavaScript; databases like MySQL, Oracle, SQL Server, PostgreSQL, and MongoDB; and development frameworks such as Spring, Hibernate, AngularJS, React, and Vue.js. I also acquired knowledge of operating systems including Windows, Linux, and macOS; integrated development environments (IDEs) such as Eclipse, Visual Studio, PyCharm, and NetBeans; project management tools like JIRA, Trello, and Asana; as well as networking technologies including TCP/IP, DNS, DHCP, VLANs, and VPNs. Additionally, I studied information security concepts such as encryption, firewalls, IDS/IPS, authentication, and authorization.",
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQG9HkMW5p01WA/company-logo_200_200/company-logo_200_200/0/1630487672555/uninove_logo?e=1763596800&v=beta&t=jzgQ357igZujjebm-SZB_VURPnwZmUjoEmlIg63CHwg'
  }
]

const certifications = [
  {
    name: 'GitHub Foundations',
    issuer: 'GitHub',
    date: 'Mar 2025',
    credentialId: '121b0d4e-a922-4073-9b72-fefae923a919',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/121b0d4e-a922-4073-9b72-fefae923a919',
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    skills: ['Git', 'Github', 'GitHub Actions', 'CI/CD', 'Version Control']
  },
]

export function Education() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])
  const academicRefs = useRef<(HTMLDivElement | null)[]>([])
  const certRefs = useRef<(HTMLDivElement | null)[]>([])

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

    academicRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    certRefs.current.forEach((ref) => {
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
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        
        <div className="education-section">
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h3 className="section-title">Academic Education</h3>
          </div>
          
          <div className="academic-grid">
            {academicEducation.map((edu, index) => (
              <div 
                key={index}
                ref={(el) => (academicRefs.current[index] = el)}
                className={`academic-card scroll-reveal scroll-reveal-delay-${index + 1}`}
              >
                <div className="academic-header">
                  <div className="academic-info-left">
                    <div className="institution-logo">
                      <img src={edu.logo} alt={edu.institution} />
                    </div>
                    <div className="academic-info">
                      <h4 className="institution-name">{edu.institution}</h4>
                      <h3 className="degree-name">{edu.degree}</h3>
                    </div>
                  </div>
                  <div className="academic-meta">
                    <p className="academic-period">{edu.period}</p>
                    <p className="academic-location">{edu.location}</p>
                  </div>
                </div>
                
                <div className={`academic-body ${expandedCards.includes(index) ? 'expanded' : ''}`}>
                  <p className="academic-description">{edu.description}</p>
                </div>

                <button 
                  className="expand-button"
                  onClick={() => toggleCard(index)}
                  aria-label={expandedCards.includes(index) ? `Collapse ${edu.institution} education details` : `Expand ${edu.institution} education details`}
                  aria-expanded={expandedCards.includes(index)}
                  tabIndex={0}
                >
                  <svg 
                    className={`expand-icon ${expandedCards.includes(index) ? 'expanded' : ''}`}
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

        {/* Certifications Section */}
        <div className="education-section">
          <div className="section-header">
            <FaCertificate className="section-icon" />
            <h3 className="section-title">Certifications</h3>
          </div>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                ref={(el) => (certRefs.current[index] = el)}
                className={`certification-card scroll-reveal scroll-reveal-delay-${(index % 3) + 1}`}
              >
                <div className="certification-header">
                  <div className="cert-logo">
                    <img src={cert.logo} alt={cert.issuer} />
                  </div>
                  <div className="cert-badge">
                    <FaCertificate />
                  </div>
                </div>
                
                <div className="certification-content">
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  
                  {cert.skills && (
                    <div className="cert-skills">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="cert-skill-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                  
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cert-link"
                      aria-label={`View ${cert.name} credential from ${cert.issuer}`}
                    >
                      <span>View Credential</span>
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
