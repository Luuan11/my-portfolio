import { lazy, Suspense } from 'react'
import { Navigation } from '../../components/Navigation'
import { Hero } from '../../components/Hero'
import { About } from '../../components/About'
import { TechnologiesAndSkills } from '../../components/TechnologiesAndSkills'
import { Footer } from '../../components/Footer'
import { ScrollToTop } from '../../components/ScrollToTop'
import { PERFORMANCE_CONFIG } from '../../constants/config'

const Projects = lazy(() => import('../../components/Projects').then(mod => ({ default: mod.Projects })))
const Experience = lazy(() => import('../../components/Experience').then(mod => ({ default: mod.Experience })))
const Education = lazy(() => import('../../components/Education').then(mod => ({ default: mod.Education })))

const SectionFallback = () => <div style={{ height: '400px', background: 'transparent' }} />

export function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <TechnologiesAndSkills />
      {PERFORMANCE_CONFIG.ENABLE_LAZY_LOADING ? (
        <>
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Education />
          </Suspense>
        </>
      ) : (
        <>
          <Projects />
          <Experience />
          <Education />
        </>
      )}
      <Footer />
      <ScrollToTop />
    </>
  )
}
