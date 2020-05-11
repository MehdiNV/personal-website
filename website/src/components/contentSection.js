import React from "react"
import { FiChevronRight} from "react-icons/fi";
import SectionLayout from './sectionLayout'
import './componentsCSS/contentSection.css'
import AboutImage from './aboutImage'

// A section should have:
// Heading (e.g. About)
// Content (can be text, other components, and so on)

const ContentSection = () => {

  return (
    <div>
      <SectionLayout sectionTitle = "About" />
      <p>Hi! I'm Mehdi, a Computer Science Undergraduate at Newcastle University. Currently, I'm working as a SWE Intern at WonderBill; take a look at my experiences, skills and other relevant info below!</p>
      <AboutImage />
      <SectionLayout sectionTitle = "Experiences" />
    </div>
  )
}

export default ContentSection;
