import React from "react"
import ExperiencesImage from './experiencesImage'
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
                  <Card.Body>
                    <p>• Maintaining and refactoring Selenium-based web scrapers as part of a wider initiative with the Project Management team</p>
                  </Card.Body>
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
                  <Card.Body>
                    <p>• Developed a new system that visualised testing results, achieving a 350% time decrease to conduct
                      multiple types of testing methods (white-box, data validation, etc)</p>
                    <p>• Wrote modules in Java and Vaadin to parse large data files more efficiently, reducing upload times by 30%</p>
                    <p>• Volunteered with other colleagues in community empowerment initiatives, such as
                      assisting local schools with errands and teaching regarding careers in Technology to young students </p>
                  </Card.Body>
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
                  <Card.Body>
                    <p>• Streamlined attorney workflow processes by engineering specific VBA macros, achieving up to 30% workload
                      decrease on resource-intensive tasks - approximately a cost reduction of £200,000 per annum.</p>
                    <p>• Identified potential infrastructure improvements by consulting with stakeholders and identifying pain points to tackle in the future</p>
                    <p>• Conducted research with other interns on Big Data, and successfully presented the subject
                      to various attorneys and business services colleagues </p>
                  </Card.Body>
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
                  <Card.Body>
                    <p>• Collaborated with the BBC to deliver Computer Science lessons to 8-13 year old students in my local
                      community, as part of the CLIMB Micro:bit Initiative</p>
                    <p>• Taught accelerated intro to JavaScript and Computational Thinking, using Micro:bits, to approximately over 55 students</p>
                    <p>• Developed the student's Computational Thinking and Programming ability in order to inspire the next generation of coders</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          </div>


        </div>
      </>
  )
}


export default Experiences;
