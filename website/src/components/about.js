import React from "react"
import { FiChevronRight} from "react-icons/fi";
import SectionLayout from './sectionLayout'
import './componentsCSS/about.css'
import AboutImage from './aboutImage'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'

// About Section should have:
// a) A 'About' description (left side)
// b) Image from undraw (right side)

const About = () => {

  return (
    <Jumbotron fluid>
      <Container>
        <div class = "aboutSection">
          <div id = "aboutContent">
            <h2> Hi there! </h2>
            <p>I'm Mehdi, a Computer Science undergraduate at Newcastle University. Take a look at my skills below!</p>
            <Badge pill variant="primary">React</Badge>
            <Badge variant="secondary">React Native</Badge>

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
