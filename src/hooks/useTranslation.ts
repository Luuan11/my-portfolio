import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export function useTranslation() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useTranslation deve ser usado dentro de um LanguageProvider')
  }

  return context
}
