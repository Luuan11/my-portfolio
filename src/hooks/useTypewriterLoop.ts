import { useState, useEffect } from 'react'

export function useTypewriterLoop(texts: string[], typingSpeed: number = 100, deletingSpeed: number = 50, pauseTime: number = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentText = texts[currentTextIndex]

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
  }, [displayText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return displayText
}
