import { FaChevronDown } from 'react-icons/fa'
import { SCROLL_CONFIG } from '../../constants/config'
import './styles.css'

interface ScrollHintProps {
  targetId?: string
}

export function ScrollHint({ targetId = 'about' }: ScrollHintProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: SCROLL_CONFIG.SCROLL_BEHAVIOR })
    }
  }

  return (
    <div className="scroll-hint-container">
      <button 
        className="scroll-hint-button" 
        onClick={handleClick}
        aria-label={`Scroll to ${targetId} section`}
        type="button"
      >
        <FaChevronDown className="scroll-hint-icon" aria-hidden="true" />
      </button>
    </div>
  )
}
