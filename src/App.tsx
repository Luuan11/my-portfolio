import { ThemeProvider } from './contexts/ThemeContext'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Technologies } from './components/Technologies'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <Hero />
        <Technologies />
        <Skills />
        <Experience />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
