import { useState } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineLocationOn, MdOutlineCalendarMonth } from 'react-icons/md'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTranslation } from '../../hooks/useTranslation'
import '../../styles/animations.css'
import './styles.css'

const companies = [
  {
    name: 'mercadoLibre',
    logo: '/images/mercadolivre.jpeg',
    position: 'softwareDeveloper',
    period: 'Mar 2024 • Present',
    location: 'Brazil',
    experiences: [
      {
        team: 'Software Developer',
        descriptionKey: 'experience.companies.mercadoLibre.softwareDeveloper',
        technologies: ['Golang', 'Java', 'Git', 'NoSQL', 'MySQL', 'Datadog', 'Grafana', 'Docker', 'CI/CD', 'Jenkins']
      },
    ]
  },
  {
    name: 'cotecna',
    logo: '/images/cotecna.jpeg',
    position: 'analyst',
    period: 'Jan 2022 • Mar 2024',
    location: 'Brazil',
    experiences: [
      {
        team: 'IT Analyst',
        period: 'Jan 2023 • Mar 2024',
        descriptionKey: 'experience.companies.cotecna.analyst',
        technologies: ['Python', 'SQL Server', 'Windows Server', 'PHP', 'Backups', 'IT Management']
      },
      {
        team: 'IT Intern',
        period: 'Jan 2022 • Dez 2023',
        descriptionKey: 'experience.companies.cotecna.intern',
        technologies: ['Python', 'SQL Server', 'Hardware', 'Networking']
      },
    ]
  }
]

export function Experience() {
  const [showAll, setShowAll] = useState(false)
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { t } = useTranslation()

  const displayedCompanies = showAll ? companies : [companies[0]]

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`experience-title title-underline ${titleVisible ? 'is-visible' : ''}`}
        >
          {t('experience.title')}
        </h2>
        <p className="experience-description">
          {t('experience.description')}
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
                    <h3 className="company-name">{t(`experience.companies.${company.name}.name`)}</h3>
                    <h4 className="card-title">{t(`experience.companies.${company.name}.position`)}</h4>
                  </div>
                </div>
                <div className="card-meta">
                  {company.period.includes('Present') && (
                    <span className="current-badge">{t('experience.current')}</span>
                  )}
                  <p className="card-date"><MdOutlineCalendarMonth className="calendar-icon" />{company.period}</p>
                  <p className="card-location"><MdOutlineLocationOn className="location-icon" />{company.location}</p>
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
                        <p className="timeline-description">{t(exp.descriptionKey)}</p>
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
                {showAll ? t('experience.showLess') : t('experience.showMore')}
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
