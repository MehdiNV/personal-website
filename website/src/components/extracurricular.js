import React from "react"
import './componentsCSS/extracurricular.css'
import ExtracurricularImage from './extracurricularImage'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Extracurricular = () => {

  return (
    <>
      <div class = "extracurricularSection">
        <div id="extracurricularContent">
        <Accordion>
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="0" class = "accordionBody">
              <div class = "companyAndDate">
                <p class="companyTitle">Code First: Girls</p>
                <p class="roleDate">Oct 2019 - Present</p>
              </div>

              <p>Coding Instructor</p>
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

        <div id="extracurricularImage">
          <ExtracurricularImage />
        </div>

      </div>
    </>
  )
}

export default Extracurricular;
