import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import './styles.css'

const academicEducation = [
  {
    institution: 'Full Cycle',
    degree: "Postgraduate Degree in Go Expert",
    period: '2024 - 2025',
    location: 'Brazil',
    description: "During my postgraduate studies in Full Cycle Go Expert, I deepened my knowledge in advanced and scalable development with Go, covering topics such as fundamentals of the language and standard packages, context management and scope control, database integration using SQLC, project packaging and modularization, unit, integration, and benchmark testing, and the development of REST, GraphQL, and gRPC APIs. The program also included concurrency with goroutines and channels, event handling and asynchronous processing, private modules and dependency management, file uploads to AWS S3, CLI creation with Cobra, application of Unit of Work and Dependency Injection patterns, implementation of Clean Architecture principles, and deployment with Docker and Kubernetes.",
    logo: '/images/fullcycle.jpeg'
  },
  {
    institution: 'Uninove Nove de Julho',
    degree: "Bachelor's Degree in Information Systems",
    period: '2019 - 2023',
    location: 'Brazil',
    description: "During my Bachelor's degree in Information Systems, I gained experience with a wide range of technologies and tools used in software development and IT management. Some of the main technologies I learned include programming languages such as Java, Python, C#, PHP, and JavaScript; databases like MySQL, Oracle, SQL Server, PostgreSQL, and MongoDB; and development frameworks such as Spring, Hibernate, AngularJS, React, and Vue.js. I also acquired knowledge of operating systems including Windows, Linux, and macOS.",
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
]

export function Education() {
  const [showAllAcademic, setShowAllAcademic] = useState(false)
  const [showAllCerts, setShowAllCerts] = useState(false)

  const displayedAcademic = showAllAcademic ? academicEducation : academicEducation.slice(0, 1)
  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 1)

  return (
    <section className="education" id="education">
      <div className="education-container">
        <motion.h2
          className="education-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px 0px' }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.p
          className="education-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px 0px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My academic background and complementary courses that contributed to my professional development and technical enhancement in the development field.
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
            <FaGraduationCap className="section-icon" />
            <h3 className="section-title">Academic Education</h3>
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
                        <h3 className="institution-name">{edu.institution}</h3>
                        <h4 className="degree-name">{edu.degree}</h4>
                      </div>
                    </div>
                    <div className="academic-meta">
                      <p className="academic-period">{edu.period}</p>
                      <p className="academic-location">{edu.location}</p>
                    </div>
                  </div>

                  <div className="academic-body">
                    <p className="academic-description">{edu.description}</p>
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
                {showAllAcademic ? 'Show less' : 'Show more'}
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
            <FaCertificate className="section-icon" />
            <h3 className="section-title">Certifications</h3>
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
                        >
                          <span>View Credential</span>
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
          {certifications.length > 1 && (
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
                  {showAllCerts ? 'Show less' : 'Show more'}
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
