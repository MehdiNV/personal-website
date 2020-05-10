import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { FiGithub,  FiLinkedin, FiMail} from "react-icons/fi";
import './componentsCSS/profileHeader.css'

const ProfileHeader = () => {

  return (
    <>
      <Jumbotron fluid>
        <Container>

        <Image src="../assets/headshot1Croatia.jpg" rounded />

        <h3>Mehdi Naderi Varandi</h3>
        <h5>Software Engineering Intern @ WonderBill </h5>
        <a href="https://www.linkedin.com/in/mehdinv/" class="hvr-underline-from-left" target="_blank">
          <FiLinkedin />
        </a>

        <a href="https://github.com/MehdiNV" class="hvr-underline-from-left" target="_blank">
          <FiGithub />
        </a>

        <a href="mailto:mehdinv@hotmail.com" class="hvr-underline-from-left" target="_blank">
          <FiMail />
        </a>

        <hr />

        </Container>
      </Jumbotron>
    </>
  )

}

export default ProfileHeader
