import React from 'react'
import { SECTIONS } from './data.js'
import { useTheme } from './hooks/useTheme.js'
import { useActiveSection } from './hooks/useActiveSection.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WorkSection from './components/WorkSection.jsx'
import { Services, Process } from './components/ServicesProcess.jsx'
import ContactForm from './components/ContactForm.jsx'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const active = useActiveSection(SECTIONS)
  return (
    <>
      <Nav active={active} theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <WorkSection />
      <Services />
      <Process />
      <ContactForm />
      <footer>© Atelier Sahara. Fictional studio for a portfolio demo. Images are AI-generated.</footer>
    </>
  )
}
