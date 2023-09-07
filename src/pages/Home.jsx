import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Education from '../components/Education'
import Internships from '../components/Internships'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='select-none' id='home'>
      <Header />
      <About />
      <Education />
      <Internships />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home