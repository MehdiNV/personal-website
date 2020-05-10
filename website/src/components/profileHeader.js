import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { FiGithub,  FiLinkedin, FiMail} from "react-icons/fi";
import './componentsCSS/profileHeader.css'
import HeadshotImage from './headshotImage'

const ProfileHeader = () => {

  return (
    <>
      <Jumbotron fluid>
        <Container>
        <div>
          <HeadshotImage id = "image"/>

          <h3>Mehdi Naderi Varandi</h3>
          <h5>Software Engineering Intern @ WonderBill </h5>
          <a href="https://www.linkedin.com/in/mehdinv/" class="hvr-underline-from-left" target="_blank">
            <FiLinkedin class = "icons" />
          </a>

          <a href="https://github.com/MehdiNV" class="hvr-underline-from-left" target="_blank">
            <FiGithub class = "icons"/>
          </a>

          <a href="mailto:mehdinv@hotmail.com" class="hvr-underline-from-left" target="_blank">
            <FiMail class = "icons"/>
          </a>

          <hr class="hrStyle" />
        </div>
        </Container>
      </Jumbotron>
    </>
  )

}

export default ProfileHeader
