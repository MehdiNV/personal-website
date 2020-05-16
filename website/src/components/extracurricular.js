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
                <p class="companyTitle">Ambitia</p>
                <p class="roleDate">Feb 2019 - Present</p>
              </div>

              <p>Founder</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2" class = "accordionBody">
              <div class = "companyAndDate">
                <p class="companyTitle">Computing and Technology Society</p>
                <p class="roleDate">May 2018 - May 2019</p>
              </div>

              <p>Outreach Officer</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3" class = "accordionBody">
              <div class = "companyAndDate">
                <p class="companyTitle">Debating Society</p>
                <p class="roleDate">May 2018 - Feb 2019</p>
              </div>

              <p>Competitions Convenor</p>
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
