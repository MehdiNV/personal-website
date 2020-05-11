import React from "react"
import { FiChevronRight} from "react-icons/fi";
import './componentsCSS/sectionLayout.css'

const SectionLayout = ({ sectionTitle }) => {
  return (
    <>
      <h3> {sectionTitle}
        <span id = "headingIcon">
          <FiChevronRight />
        </span>
      </h3>
    </>
  )
}

export default SectionLayout;
