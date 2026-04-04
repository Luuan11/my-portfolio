import { useTheme } from '../../contexts/ThemeContext'
import { FaTimes } from 'react-icons/fa'
import './styles.css'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { theme, toggleTheme } = useTheme()

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Settings</h2>
          <button 
            className="modal-close" 
            onClick={onClose}
            aria-label="Close settings"
            type="button"
          >
            <FaTimes size={20} />
          </button>
        </div>
        
        <div className="modal-body">
          <div className="setting-section">
            <h3 className="setting-title">Appearance</h3>
            <p className="setting-description">Choose your preferred theme</p>
            
            <div className="theme-options">
              <button 
                className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => theme === 'light' && toggleTheme()}
              >
                <div className="theme-preview dark-preview">
                  <div className="preview-header"></div>
                  <div className="preview-content">
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                  </div>
                </div>
                <span className="theme-label">Dark</span>
              </button>
              
              <button 
                className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                onClick={() => theme === 'dark' && toggleTheme()}
              >
                <div className="theme-preview light-preview">
                  <div className="preview-header"></div>
                  <div className="preview-content">
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                  </div>
                </div>
                <span className="theme-label">Light</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
