import React from "react"
import { FiChevronRight} from "react-icons/fi";
import SectionLayout from './sectionLayout'
import './componentsCSS/about.css'
import AboutImage from './aboutImage'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

// About Section should have:
// a) A 'About' description (left side)
// b) Image from undraw (right side)

const About = () => {

  return (
    <Jumbotron fluid>
      <Container>
        <div class = "aboutSection">
          <div id = "aboutContent">
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
            </p>
          </div>

          <div id = "aboutImage">
            <AboutImage />
          </div>

        </div>


      </Container>
    </Jumbotron>
  )
}

export default About;
