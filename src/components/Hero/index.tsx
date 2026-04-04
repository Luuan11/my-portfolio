import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTypewriterLoop } from '../../hooks/useTypewriterLoop'
import { useTranslation } from '../../hooks/useTranslation'
import { ScrollHint } from '../ScrollHint'
import { ANIMATION_CONFIG } from '../../constants/config'
import '../../styles/animations.css'
import './styles.css'

export function Hero() {
  const { t } = useTranslation()
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { elementRef: descRef, isVisible: descVisible } = useScrollReveal()
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollReveal()
  const typewriterText = useTypewriterLoop(
    ['Software Developer', 'Backend Developer', 'Frontend Developer'],
    ANIMATION_CONFIG.TYPEWRITER_SPEED,
    ANIMATION_CONFIG.TYPEWRITER_DELETE_SPEED,
    ANIMATION_CONFIG.TYPEWRITER_PAUSE
  )

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className={`hero-title scroll-reveal ${titleVisible ? 'is-visible' : ''}`}
          >
            {t('hero.title')}
          </h1>
          <div className="typewriter-container">
            <span className="typewriter-text">{typewriterText}</span>
            <span className="typewriter-cursor">|</span>
          </div>
          <p 
            ref={descRef as React.RefObject<HTMLParagraphElement>}
            className={`hero-description scroll-reveal scroll-reveal-delay-1 ${descVisible ? 'is-visible' : ''}`}
          >
            {t('hero.description')}
          </p>
        </div>
        <div 
          ref={imageRef as React.RefObject<HTMLDivElement>}
          className={`hero-image scroll-reveal scroll-reveal-delay-3 ${imageVisible ? 'is-visible' : ''}`}
        >
          <div className="image-wrapper">
            <img 
              src="https://github.com/Luuan11.png" 
              alt="Portrait photo of Luan Fernando, Software Developer"
              className="profile-image"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              width="400"
              height="400"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
      <ScrollHint targetId="about" />
    </section>
  )
}
