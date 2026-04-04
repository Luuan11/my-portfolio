import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTranslation } from '../../hooks/useTranslation'
import { FaRegUser, FaRegLightbulb } from 'react-icons/fa'
import { LuBriefcaseBusiness } from 'react-icons/lu'
import '../../styles/animations.css'
import './styles.css'

export function About() {
  const { t } = useTranslation()
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollReveal()
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal()

  return (
    <section 
      id="about" 
      className="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="about-container">
        <h2 className={`about-title title-underline scroll-reveal ${sectionVisible ? 'is-visible' : ''}`}>
          {t('about.title')}
        </h2>
        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`about-content scroll-reveal scroll-reveal-delay-1 ${contentVisible ? 'is-visible' : ''}`}
        >
          <div className="about-topic">
            <h3 className="about-topic-title">
              <FaRegUser className="topic-icon" />
              {t('about.sections.whoIAm')}
            </h3>
            <p>
              {t('about.sections.whoIAmText')}
            </p>
          </div>

          <div className="about-topic">
            <h3 className="about-topic-title">
              <LuBriefcaseBusiness className="topic-icon" />
              {t('about.sections.experience')}
            </h3>
            <p>
              {t('about.sections.experienceText')}
            </p>
          </div>

          <div className="about-topic">
            <h3 className="about-topic-title">
              <FaRegLightbulb className="topic-icon" />
              {t('about.sections.learning')}
            </h3>
            <p>
              {t('about.sections.learningText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
