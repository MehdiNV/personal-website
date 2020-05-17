import React from "react"
import { FiChevronRight} from "react-icons/fi";
import SectionLayout from './sectionLayout'
import './componentsCSS/skills.css'
import SkillsImage from './skillsImage'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'

// About Section should have:
// a) A 'About' description (left side)
// b) Image from undraw (right side)

const Skills = () => {

  return (
    <>
        <div class = "skillsSection">
          <div id = "skillsImage">
            <SkillsImage />
          </div>

          <div id = "skillsContent">

            <p>Take a look at my technical skills below: 💻</p>

            <div class = "skillSegment">
              <h6 class = "skillsDenotion">Languages:</h6>
              <Badge variant="primary">JavaScript</Badge>
              <Badge variant="primary">Python</Badge>
              <Badge variant="primary">Java</Badge>
              <Badge variant="primary">Typescript</Badge>
              <Badge variant="primary">HTML</Badge>
              <Badge variant="primary">CSS</Badge>
              <Badge variant="primary">VBA</Badge>
              <Badge variant="primary">C</Badge>
            </div>

            <div class = "skillSegment">
              <h6 class = "skillsDenotion">Frameworks:</h6>
              <Badge variant="primary">React</Badge>
              <Badge variant="primary">React Native</Badge>
              <Badge variant="primary">Bootstrap</Badge>
              <Badge variant="primary">Gatsby</Badge>
              <Badge variant="primary">Node</Badge>
              <Badge variant="primary">Firebase</Badge>
            </div>

            <div class = "skillSegment">
              <h6 class = "skillsDenotion">Tools:</h6>
              <Badge variant="primary">Git</Badge>
              <Badge variant="primary">Bash</Badge>
              <Badge variant="primary">MongoDB</Badge>
              <Badge variant="primary">Postico</Badge>
              <Badge variant="primary">Postman</Badge>
              <Badge variant="primary">NPM</Badge>
              <Badge variant="primary">GraphQL</Badge>
              <Badge variant="primary">Heroku</Badge>
            </div>


          </div>

        </div>
      </>
  )
}

export default Skills;
