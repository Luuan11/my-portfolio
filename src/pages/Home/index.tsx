import { Navigation } from '../../components/Navigation'
import { Hero } from '../../components/Hero'
import { About } from '../../components/About'
import { Technologies } from '../../components/Technologies'
import { Skills } from '../../components/Skills'
import { Experience } from '../../components/Experience'
import { Projects } from '../../components/Projects'
import { Education } from '../../components/Education'
import { Footer } from '../../components/Footer'
import { ScrollToTop } from '../../components/ScrollToTop'

export function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
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
