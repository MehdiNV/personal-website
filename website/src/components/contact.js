import React from "react"
import './componentsCSS/contact.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ContactImage from './contactImage'

const Contact = () => {

  return (
    <>
      <div class = "contactSection">
        <div id = "contactContent">
        </div>

        <div id = "contactImage">
          <ContactImage />
        </div>
      </div>
    </>
  )

}

export default Contact;
