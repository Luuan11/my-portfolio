import { useState, useEffect, useMemo } from 'react'
import { ANIMATION_CONFIG } from '../constants/config'

export function useTypewriterLoop(
  texts: string[],
  typingSpeed: number = ANIMATION_CONFIG.TYPEWRITER_SPEED,
  deletingSpeed: number = ANIMATION_CONFIG.TYPEWRITER_DELETE_SPEED,
  pauseTime: number = ANIMATION_CONFIG.TYPEWRITER_PAUSE
) {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const memoizedTexts = useMemo(() => texts, [texts])

  useEffect(() => {
    const currentText = memoizedTexts[currentTextIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(pauseTimeout)
    }

    if (!isDeleting && displayText === currentText) {
      setIsPaused(true)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1))
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, currentTextIndex, memoizedTexts, typingSpeed, deletingSpeed, pauseTime])

  return displayText
}
