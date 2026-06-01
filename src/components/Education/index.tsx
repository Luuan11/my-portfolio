import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { PiCertificate } from 'react-icons/pi'
import { LuGraduationCap } from 'react-icons/lu'
import { MdOutlineLocationOn, MdOutlineCalendarMonth } from 'react-icons/md'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTranslation } from '../../hooks/useTranslation'
import './styles.css'

const academicEducation = [
  {
    institution: 'fullCycle',
    degree: 'postgraduate',
    period: '2024 - 2025',
    location: 'Brazil',
    descriptionKey: 'education.institutions.fullCycle.description',
    logo: '/images/fullcycle.jpeg'
  },
  {
    institution: 'uninove',
    degree: 'bachelor',
    period: '2019 - 2023',
    location: 'Brazil',
    descriptionKey: 'education.institutions.uninove.description',
    logo: '/images/uninove.jpeg'
  }
]

const certifications = [
  {
    name: 'GitHub Foundations',
    issuer: 'GitHub',
    date: 'Mar 2025',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/121b0d4e-a922-4073-9b72-fefae923a919',
    logo: '/images/github-foundations.png',
    skills: ['Git', 'Github', 'GitHub Actions', 'CI/CD', 'Version Control']
  },
  {
    name: 'AWS Serverless Demonstrated',
    issuer: 'AWS',
    date: 'May 2026',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/2a0471a0-6514-475f-9548-0cdb52dfc159',
    logo: '/images/aws-serverless-demonstrated.png',
    skills: ['AWS', 'Serverless', 'AWS Lambda', 'API Gateway', 'DynamoDB']
  },
]

export function Education() {
  const [showAllAcademic, setShowAllAcademic] = useState(false)
  const [showAllCerts, setShowAllCerts] = useState(false)
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { t } = useTranslation()

  const displayedAcademic = showAllAcademic ? academicEducation : academicEducation.slice(0, 1)
  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 2)

  return (
    <section className="education" id="education">
      <div className="education-container">
        <motion.h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`education-title title-underline ${titleVisible ? 'is-visible' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px 0px' }}
          transition={{ duration: 0.5 }}
        >
          {t('education.title')}
        </motion.h2>

        <motion.p
          className="education-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px 0px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('education.description')}
        </motion.p>

        {/* Academic Education */}
        <div className="education-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px 0px' }}
            transition={{ duration: 0.5 }}
          >
            <LuGraduationCap className="section-icon" />
            <h3 className="section-title">{t('education.academic')}</h3>
          </motion.div>

          <div className="academic-grid">
            <AnimatePresence>
              {displayedAcademic.map((edu, index) => (
                <motion.div
                  key={index}
                  className="academic-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
                >
                  <div className="academic-header">
                    <div className="academic-info-left">
                      <div className="institution-logo">
                        <img
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          loading="lazy"
                          width="60"
                          height="60"
                        />
                      </div>
                      <div className="academic-info">
                        <h3 className="institution-name">{t(`education.institutions.${edu.institution}.name`)}</h3>
                        <h4 className="degree-name">{t(`education.institutions.${edu.institution}.degree`)}</h4>
                      </div>
                    </div>
                    <div className="academic-meta">
                      <p className="academic-period"><MdOutlineCalendarMonth className="calendar-icon" />{edu.period}</p>
                      <p className="academic-location"><MdOutlineLocationOn className="location-icon" />{edu.location}</p>
                    </div>
                  </div>

                  <div className="academic-body">
                    <p className="academic-description">{t(edu.descriptionKey)}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show More Button */}
          <motion.div
            className="education-button-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <button
              className="show-more-button"
              onClick={() => setShowAllAcademic(!showAllAcademic)}
              aria-label={showAllAcademic ? 'Show less education' : 'Show more education'}
            >
              <span className="button-text">
                {showAllAcademic ? t('education.showLess') : t('education.showMore')}
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
                animate={{ rotate: showAllAcademic ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </motion.svg>
            </button>
          </motion.div>
        </div>

        {/* Certifications */}
        <div className="education-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px 0px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PiCertificate className="section-icon" />
            <h3 className="section-title">{t('education.certifications')}</h3>
          </motion.div>

          <div className="certifications-grid">
            <AnimatePresence>
              {displayedCerts.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
                >
                  <div className="certification-header">
                    <div className="certification-content">
                      <h4 className="cert-name">{cert.name}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <p className="cert-date"><MdOutlineCalendarMonth className="calendar-icon" />{cert.date}</p>

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
                        >
                          <span>{t('education.viewCredential')}</span>
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show More Button for Certs */}
          {certifications.length > 2 && (
            <motion.div
              className="education-button-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <button
                className="show-more-button"
                onClick={() => setShowAllCerts(!showAllCerts)}
                aria-label={showAllCerts ? 'Show less certifications' : 'Show more certifications'}
              >
                <span className="button-text">
                  {showAllCerts ? t('education.showLess') : t('education.showMore')}
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
                  animate={{ rotate: showAllCerts ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </motion.svg>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
