import React from 'react'
import './Body.css'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
const Body = () => {
  return (
    <div className='Body'>
      <section id='About'>
        <About/>
      </section>
      <section id='Projects'>
        <Projects/>
      </section>
      <section id='Skills'>
        <Skills/>
      </section>
      <section id='Contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body