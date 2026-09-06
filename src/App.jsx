import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CaseStudy from './components/CaseStudy'
import { projects } from './data/projects'

function App() {
  const [active, setActive] = useState(null)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork projects={projects} onOpen={setActive} />
        <Services />
        {/* <Process /> */}
        <About />
        <CTA />
      </main>
      <Footer />
      <CaseStudy key={active?.id ?? 'none'} project={active} onClose={() => setActive(null)} />
    </>
  )
}

export default App
