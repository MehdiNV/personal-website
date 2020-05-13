import React from "react"
import { FiChevronRight} from "react-icons/fi";
import './componentsCSS/sectionLayout.css'

const SectionLayout = ({ sectionTitle }) => {
  return (
    <>
      <h4> {sectionTitle}
        <span id = "headingIcon">
          <FiChevronRight />
        </span>
      </h4>
    </>
  )
}

export default SectionLayout;
