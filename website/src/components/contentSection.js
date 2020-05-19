import React from "react"
import { FiChevronRight} from "react-icons/fi";
import SectionLayout from './sectionLayout'
import './componentsCSS/contentSection.css'
import Background from './background'
import Skills from './skills'
import Experiences from './experiences'
import Extracurricular from './extracurricular'
import Contact from './contact'

// A section should have:
// Heading (e.g. About)
// Content (can be text, other components, and so on)

const ContentSection = () => {

  return (
    <div>
      <Background />
      <Skills />
      <Experiences />
      <Extracurricular />
      <Contact />
    </div>
  )
}

export default ContentSection;
