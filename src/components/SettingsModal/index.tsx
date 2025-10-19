import { useTheme } from '../../contexts/ThemeContext'
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
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
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
