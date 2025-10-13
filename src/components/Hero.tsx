import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTypewriterLoop } from '../hooks/useTypewriterLoop'
import '../styles/animations.css'
import './Hero.css'

export function Hero() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { elementRef: descRef, isVisible: descVisible } = useScrollReveal()
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollReveal()
  const typewriterText = useTypewriterLoop(
    ['Software Developer', 'Backend Developer', 'Frontend Developer'],
    100,
    50,
    2000
  )

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className={`hero-title scroll-reveal ${titleVisible ? 'is-visible' : ''}`}
          >
            Hi, I'm Luan Fernando
          </h1>
          <div className="typewriter-container">
            <span className="typewriter-text">{typewriterText}</span>
            <span className="typewriter-cursor">|</span>
          </div>
          <p 
            ref={descRef as React.RefObject<HTMLParagraphElement>}
            className={`hero-description scroll-reveal scroll-reveal-delay-1 ${descVisible ? 'is-visible' : ''}`}
          >
            I am a <b> software Developer </b> passionate about development, with comprehensive skills in both frontend and backend, which allow me to develop great digital experiences.
          </p>
        </div>
        <div 
          ref={imageRef as React.RefObject<HTMLDivElement>}
          className={`hero-image scroll-reveal scroll-reveal-delay-3 ${imageVisible ? 'is-visible' : ''}`}
        >
          <div className="image-wrapper">
            <img 
              src="https://github.com/Luuan11.png" 
              alt="Luan Fernando"
              className="profile-image"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
