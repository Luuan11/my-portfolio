import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { AppShell } from './components/AppShell'
import './App.css'

function App() {
  return (
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
  )
}

export default App