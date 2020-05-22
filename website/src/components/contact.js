import React from "react"
import './componentsCSS/contact.css'
import ContactImage from './contactImage'
import { FiGithub,  FiLinkedin, FiMail} from "react-icons/fi";

const Contact = () => {

  return (
    <>
      <div class = "contactSection">
        <div id = "contactContent">
          <h3>Get in contact!</h3>
          <p>I'm available on all 3 platforms below - if you'd like to hear more, shoot me an email or a message!</p>
          <a href="https://www.linkedin.com/in/mehdinv/" class="hvr-underline-from-left" target="_blank">
            <FiLinkedin class = "icons" />
          </a>

          <a href="https://github.com/MehdiNV" class="hvr-underline-from-left" target="_blank">
            <FiGithub class = "icons"/>
          </a>

          <a href="mailto:mehdinv@hotmail.com" class="hvr-underline-from-left" target="_blank">
            <FiMail class = "icons"/>
          </a>
        </div>

        <div id = "contactImage">
          <ContactImage />
        </div>
      </div>
    </>
  )

}

export default Contact;
