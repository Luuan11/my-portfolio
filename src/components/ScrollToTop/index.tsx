import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SCROLL_CONFIG } from '../../constants/config'
import './styles.css'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > SCROLL_CONFIG.SCROLL_THRESHOLD) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: SCROLL_CONFIG.SCROLL_BEHAVIOR
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            opacity: { duration: 0.3, ease: 'easeOut' },
            scale: { 
              duration: 0.3, 
              ease: 'easeOut', 
              type: 'spring', 
              stiffness: 300, 
              damping: 30 
            },
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
