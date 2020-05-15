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
                  <div class = "companyAndDate">
                    <p class="companyTitle">WonderBill</p>
                    <p class="roleDate">Sep 2019 - Present</p>
                  </div>

                  <p>Software Engineering Intern</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" class = "accordionBody">
                  <div class = "companyAndDate">
                    <p class="companyTitle">Visa</p>
                    <p class="roleDate">Jun - Aug 2019</p>
                  </div>

                  <p>Software Engineering Intern</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" class = "accordionBody">
                  <div class = "companyAndDate">
                    <p class="companyTitle">Shearman & Sterling LLP</p>
                    <p class="roleDate">Jul - Jul 2018</p>
                  </div>

                  <p>Knowledge Management Summer Intern</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3" class = "accordionBody">
                  <div class = "companyAndDate">
                    <p class="companyTitle">BBC</p>
                    <p class="roleDate">Jan - May 2018</p>
                  </div>

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
