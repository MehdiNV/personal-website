import React from "react"
import ExperiencesImage from './ExperiencesImage'
import './componentsCSS/experiences.css'
import Accordion from 'react-bootstrap/Accordion'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

const Experiences = () => {
  return (
      <>
        <div class = "experienceSection">
          <div id = "experiencesImage">
            <ExperiencesImage />
          </div>

          <div id = "experiencesContent">
            <Accordion>
              <Card >
                <Accordion.Toggle as={Card.Header} eventKey="0" class = "accordionBody">
                  <p class="companyTitle">WonderBill</p>
                  <p>Software Engineering Intern</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" class = "accordionBody">
                  <p class="companyTitle">Visa</p>
                  <p>Software Engineering Intern</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" class = "accordionBody">
                  <p class="companyTitle">Shearman & Sterling LLP</p>
                  <p>Knowledge Management Summer Intern</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3" class = "accordionBody">
                  <p class="companyTitle">BBC</p>
                  <p>Computer Science Mentor (Contract role)</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          </div>


        </div>
      </>
  )
}


export default Experiences;
