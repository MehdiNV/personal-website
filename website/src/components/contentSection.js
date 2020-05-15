import React from "react"
import { FiChevronRight} from "react-icons/fi";
import SectionLayout from './sectionLayout'
import './componentsCSS/contentSection.css'
import About from './about'
import Experiences from './experiences'
import Extracurricular from './extracurricular'

// A section should have:
// Heading (e.g. About)
// Content (can be text, other components, and so on)

const ContentSection = () => {

  return (
    <div>
      <SectionLayout sectionTitle = "About" />
      <About />
      <SectionLayout sectionTitle = "Experiences" />
      <Experiences />
      <SectionLayout sectionTitle = "Extracurricular" />
      <Extracurricular />
    </div>
  )
}

export default ContentSection;
