import React from "react"
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
          <div id = "profileHeader">
            <HeadshotImage id = "image"/>
            <hr class="hrStyle" />

            <h2 id = "nameHeader">Mehdi Naderi Varandi</h2>
            <h3 id = "subtitleHeader">Computer Science, IT & Physics Undergraduate of the Year 2019 </h3>
            <a href="https://www.linkedin.com/in/mehdinv/" class="hvr-underline-from-left" target="_blank" rel="noopener noreferrer">
              <FiLinkedin class = "icons" />
            </a>

            <a href="https://github.com/MehdiNV" class="hvr-underline-from-left" target="_blank" rel="noopener noreferrer">
              <FiGithub class = "icons"/>
            </a>

            <a href="mailto:mehdinv@hotmail.com" class="hvr-underline-from-left" target="_blank" rel="noopener noreferrer">
              <FiMail class = "icons"/>
            </a>

            <hr class="hrStyle" />
          </div>
    </>
  )

}

export default ProfileHeader
