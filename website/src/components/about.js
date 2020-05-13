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
    <>
        <div class = "aboutSection">
          <div id = "aboutContent">
            <h3> Hi there! </h3>
            <p>I'm Mehdi, a Computer Science undergraduate at Newcastle University. Take a look at my skills below!</p>

            <div id = "languages">
              <h6>Languages:</h6>
              <Badge class = "badges" variant="primary">JavaScript</Badge>
              <Badge class = "badges" variant="primary">Python</Badge>
              <Badge class = "badges" variant="primary">Java</Badge>
              <Badge class = "badges" variant="primary">Typescript</Badge>
              <Badge class = "badges" variant="primary">HTML</Badge>
              <Badge class = "badges" variant="primary">CSS</Badge>
              <Badge class = "badges" variant="primary">VBA</Badge>
              <Badge class = "badges" variant="primary">C</Badge>
            </div>

            <div id = "languages">
              <h6>Frameworks:</h6>
              <Badge class = "badges" variant="primary">React</Badge>
              <Badge class = "badges" variant="primary">React Native</Badge>
              <Badge class = "badges" variant="primary">Bootstrap</Badge>
              <Badge class = "badges" variant="primary">Gatsby</Badge>
              <Badge class = "badges" variant="primary">Node</Badge>
              <Badge class = "badges" variant="primary">Firebase</Badge>
            </div>

            <div id = "languages">
              <h6>Tools:</h6>
              <Badge class = "badges" variant="primary">Git</Badge>
              <Badge class = "badges" variant="primary">Bash</Badge>
              <Badge class = "badges" variant="primary">MongoDB</Badge>
              <Badge class = "badges" variant="primary">Postico</Badge>
              <Badge class = "badges" variant="primary">Postman</Badge>
              <Badge class = "badges" variant="primary">NPM</Badge>
              <Badge class = "badges" variant="primary">GraphQL</Badge>
              <Badge class = "badges" variant="primary">Heroku</Badge>
            </div>


          </div>

          <div id = "aboutImage">
            <AboutImage />
          </div>

        </div>
      </>
  )
}

export default About;
