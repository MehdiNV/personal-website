import React from "react"
import { FiChevronRight} from "react-icons/fi";
import './componentsCSS/section.css'

// A section should have:
// Heading (e.g. About)
// Content (can be text, other components, and so on)

const Section = ({ sectionTitle }) => {

  return (
    <div>
      <h3>{sectionTitle}
        <span id = "headingIcon">
          <FiChevronRight />
        </span>
      </h3>

      <h1> Hi! </h1>
    </div>
  )
}

export default Section;
