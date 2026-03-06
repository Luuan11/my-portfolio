import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Technologies } from './components/Technologies'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { NotFound } from './pages/NotFound'
import './App.css'

function MainPage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Technologies />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
      <ScrollToTop />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App