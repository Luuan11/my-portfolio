import { useState, useEffect, ReactNode } from 'react'
import { LoadingScreen } from '../LoadingScreen'
import { PERFORMANCE_CONFIG } from '../../constants/config'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const [isLoading, setIsLoading] = useState(PERFORMANCE_CONFIG.ENABLE_LOADING_SCREEN)

  useEffect(() => {
    if (!PERFORMANCE_CONFIG.ENABLE_LOADING_SCREEN) {
      setIsLoading(false)
      return
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, PERFORMANCE_CONFIG.LAZY_LOAD_DELAY)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in' }}>
        {children}
      </div>
    </>
  )
}
