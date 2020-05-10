import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { FiGithub,  FiLinkedin, FiMail} from "react-icons/fi";
import './componentsCSS/profileHeader.css'
import HeadshotImage from './headshotImage'

// Profile Header Section
// This contains basically the top-most part of the website, including...
// a) The Headshot image (from headshotImage/gatsby-image component)
// b) Titles / subtitle (name, current role, etc)
// c) Links to other websites (e.g. GitHub, LinkedIn, and so on)
const ProfileHeader = () => {

  return (
    <>
      <Jumbotron fluid>
        <Container>
        <div id = "profileHeader">
          <HeadshotImage id = "image"/>
          <hr class="hrStyle" />

          <h2 id = "nameHeader">Mehdi Naderi Varandi</h2>
          <h3 id = "subtitleHeader">Software Engineering Intern @ WonderBill </h3>
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
