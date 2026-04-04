import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { AppShell } from './components/AppShell'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <div className="App">
            <AppShell>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppShell>
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App