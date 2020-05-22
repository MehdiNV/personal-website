import React from "react"
import './componentsCSS/contentSection.css'
import Background from './background'
import Skills from './skills'
import Experiences from './experiences'
import Extracurricular from './extracurricular'
import Contact from './contact'
import ProfileHeader from '../components/profileHeader'

// A section should have:
// Heading (e.g. About)
// Content (can be text, other components, and so on)

const ContentSection = () => {

  return (
    <div>

      <div class = "animate__animated animate__fadeIn">
        <ProfileHeader />
      </div>

      <div class = "animate__animated animate__fadeIn animate__delay-1s">
      <Background />
      <hr class="hrStyle" />
      </div>

      <div class = "animate__animated animate__fadeIn animate__delay-2s">
        <Skills />
        <hr class="hrStyle" />
      </div>

      <div class = "animate__animated animate__fadeIn animate__delay-3s">
        <Experiences />
        <hr class="hrStyle" />
      </div>

      <div class = "animate__animated animate__fadeIn animate__delay-4s">
        <Extracurricular />
        <hr class="hrStyle" />
      </div>

      <div class = "animate__animated animate__fadeIn animate__delay-5s">
        <Contact />
      </div>

    </div>
  )
}

export default ContentSection;
