import React from "react"
import { FiChevronRight} from "react-icons/fi";

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
