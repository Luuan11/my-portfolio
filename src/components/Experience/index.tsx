import { useState } from 'react'
import { motion } from 'framer-motion'
import '../../styles/animations.css'
import './styles.css'

const companies = [
  {
    name: 'Mercado Libre',
    logo: '/images/mercadolivre.jpeg',
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
    logo: '/images/cotecna.jpeg',
    position: 'IT Analyst',
    period: 'Jan 2022 • Mar 2024',
    location: 'Brazil',
    experiences: [
      {
        team: 'IT Analyst',
        period: 'Jan 2023 • Mar 2024',
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
  const [showAll, setShowAll] = useState(false)

  const displayedCompanies = showAll ? companies : [companies[0]]

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experiences</h2>
        <p className="experience-description">
          My professional journey in software development and IT management, where I've contributed to building scalable solutions and supporting technical infrastructure across diverse environments.
        </p>
        <div className="experience-content">
          {displayedCompanies.map((company, companyIndex) => (
            <motion.div
              key={companyIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: '-100px 0px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: companyIndex * 0.15 }}
              className="experience-card"
            >
              <div className="card-header">
                <div className="company-info">
                  <div className="company-logo">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} company logo`}
                      loading="lazy"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div>
                    <h3 className="company-name">{company.name}</h3>
                    <h4 className="card-title">{company.position}</h4>
                  </div>
                </div>
                <div className="card-meta">
                  {company.period.includes('Present') && (
                    <span className="current-badge">Current</span>
                  )}
                  <p className="card-date">{company.period}</p>
                  <p className="card-location">{company.location}</p>
                </div>
              </div>

              <div className="card-body">
                <div className="timeline">
                  {company.experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <div className="timeline-title-wrapper">
                            <h5 className="timeline-team">{exp.team}</h5>
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
            </motion.div>
          ))}

          <motion.div
            className="education-button-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <button
              className="show-more-button"
              onClick={() => setShowAll(!showAll)}
              aria-label={showAll ? 'Show less experiences' : 'Show more experiences'}
            >
              <span className="button-text">
                {showAll ? 'Show less' : 'Show more'}
              </span>
              <motion.svg
                className="chevron-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </motion.svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
