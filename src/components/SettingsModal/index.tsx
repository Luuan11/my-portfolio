import { useTheme } from '../../contexts/ThemeContext'
import { useTranslation } from '../../hooks/useTranslation'
import { FaTimes } from 'react-icons/fa'
import './styles.css'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useTranslation()

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{t('settings.title')}</h2>
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
            <h3 className="setting-title">{t('settings.appearance')}</h3>
            <p className="setting-description">{t('settings.appearanceDesc')}</p>
            
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
                <span className="theme-label">{t('settings.dark')}</span>
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
                <span className="theme-label">{t('settings.light')}</span>
              </button>
            </div>
          </div>

          <div className="setting-section">
            <h3 className="setting-title">{t('settings.language')}</h3>
            <p className="setting-description">{t('settings.languageDesc')}</p>
            
            <div className="language-options">
              <button 
                className={`language-option ${language === 'pt' ? 'active' : ''}`}
                onClick={() => setLanguage('pt')}
                title="Português"
              >
                <span className="language-flag">🇧🇷</span>
                <span className="language-name">Português</span>
              </button>
              
              <button 
                className={`language-option ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
                title="English"
              >
                <span className="language-flag">🇺🇸</span>
                <span className="language-name">English</span>
              </button>
              
              <button 
                className={`language-option ${language === 'es' ? 'active' : ''}`}
                onClick={() => setLanguage('es')}
                title="Español"
              >
                <span className="language-flag">🇪🇸</span>
                <span className="language-name">Español</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
