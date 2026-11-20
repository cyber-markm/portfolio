import { useEffect, useRef, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import PrivacyPolicy from './components/DataNotice.jsx'

const PRIVACY_HASH = '#privacy-policy'

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const wasPrivacy = useRef(false)
  const isPrivacy = hash === PRIVACY_HASH

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (isPrivacy) {
      wasPrivacy.current = true
      document.title = 'Privacy Policy | Mark Marvin Noynay'
      window.scrollTo(0, 0)
      document.getElementById('privacy-heading')?.focus()
      return
    }

    document.title = 'Mark Marvin Noynay | Portfolio'
    if (wasPrivacy.current && hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
    wasPrivacy.current = false
  }, [isPrivacy, hash])

  const handleSkip = (event) => {
    event.preventDefault()
    document.getElementById('main')?.focus()
  }

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main" onClick={handleSkip}>
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        {isPrivacy ? (
          <PrivacyPolicy />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App