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

            <div id = "languages">
              <h4>Languages:</h4>
              <Badge  variant="secondary">JavaScript</Badge>
              <Badge  variant="secondary">Python</Badge>
              <Badge class = "badges" variant="primary">Java</Badge>
              <Badge class = "badges" variant="secondary">Typescript</Badge>
              <Badge class = "badges" variant="secondary">HTML</Badge>
              <Badge class = "badges" variant="secondary">CSS</Badge>
              <Badge class = "badges" variant="secondary">VBA</Badge>
              <Badge class = "badges" variant="secondary">C</Badge>
            </div>

            <div id = "languages">
              <h4>Frameworks:</h4>
              <Badge class = "badges" variant="primary">React</Badge>
              <Badge class = "badges" variant="secondary">React Native</Badge>
              <Badge class = "badges" variant="primary">Bootstrap</Badge>
              <Badge class = "badges" variant="secondary">Gatsby</Badge>
              <Badge class = "badges" variant="secondary">Node</Badge>
              <Badge class = "badges" variant="secondary">Firebase</Badge>
            </div>

            <div id = "languages">
              <h4>Tools:</h4>
              <Badge class = "badges" variant="primary">Git</Badge>
              <Badge class = "badges" variant="secondary">Bash</Badge>
              <Badge class = "badges" variant="primary">MongoDB</Badge>
              <Badge class = "badges" variant="secondary">Postico</Badge>
              <Badge class = "badges" variant="secondary">Postman</Badge>
              <Badge class = "badges" variant="secondary">NPM</Badge>
              <Badge class = "badges" variant="secondary">GraphQL</Badge>
              <Badge class = "badges" variant="secondary">Heroku</Badge>
            </div>


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
