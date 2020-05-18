import React, { useState } from "react"
import './componentsCSS/extracurricular.css'
import ExtracurricularImage from './extracurricularImage'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const Extracurricular = () => {
  const [firstChevron, changeFirstChevron] = useState(false);
  const [secondChevron, changeSecondChevron] = useState(true);
  const [thirdChevron, changeThirdChevron] = useState(true);
  const [fourthChevron, changeFourthChevron] = useState(true);

  function changeSpecificChevron(specificedChevronNumber){
    changeFirstChevron(true);
    changeSecondChevron(true);
    changeThirdChevron(true);
    changeFourthChevron(true);

    switch (specificedChevronNumber){
      case 1:
        changeFirstChevron(!firstChevron);
        break;
      case 2:
        changeSecondChevron(!secondChevron);
        break;
      case 3:
        changeThirdChevron(!thirdChevron);
        break;
      case 4:
        changeFourthChevron(!fourthChevron);
        break;
    }
  }

  return (
    <>
      <div class = "extracurricularSection">
        <div id="extracurricularImage">
          <ExtracurricularImage />
        </div>

        <div id="extracurricularContent">
          <p id = "sectionText">In between my professional and academic efforts, I also regularly get involved in volunteering initiative and extracurricular activities. Take a look at some of them below! </p>

          <Accordion defaultActiveKey="0">
            <Card onClick = {() => changeSpecificChevron(1)}>
              <Accordion.Toggle as={Card.Header} eventKey="0" class = "accordionBody">
                <div class = "companyAndDate">
                  <p class="companyTitle">Code First: Girls</p>
                  <p class="roleDate">Oct 2019 - Present</p>
                </div>

                <div class = "roleAndChevron">
                  <p>Coding Instructor</p>
                  <div class = "chevronIcon">
                    {firstChevron ? <FiChevronRight />: <FiChevronDown />}
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>• Teach weekly sessions on Web Development to a class of 15+ students as part of a national effort to encourage more women to pursue software development</p>
                  <p>• Technologies covered are HTML, CSS, Bootstrap, Git, JavaScript, JQuery</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card onClick = {() => changeSpecificChevron(2)}>
              <Accordion.Toggle as={Card.Header} eventKey="1" class = "accordionBody">
                <div class = "companyAndDate">
                  <p class="companyTitle">Ambitia</p>
                  <p class="roleDate">Feb 2019 - Present</p>
                </div>

                <div class = "roleAndChevron">
                  <p>Founder</p>
                  <div class = "chevronIcon">
                    {secondChevron ? <FiChevronRight />: <FiChevronDown />}
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p>• Implementing a social platform aimed at connecting students to relevant career opportunities, and empowering students regardless of their access to opportunities</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card onClick = {() => changeSpecificChevron(3)}>
              <Accordion.Toggle as={Card.Header} eventKey="2" class = "accordionBody">
                <div class = "companyAndDate">
                  <p class="companyTitle">Computing and Technology Society</p>
                  <p class="roleDate">May 2018 - May 2019</p>
                </div>

                <div class = "roleAndChevron">
                  <p>Outreach Officer</p>
                  <div class = "chevronIcon">
                    {thirdChevron ? <FiChevronRight />: <FiChevronDown />}
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p>• Elected as the Outreach Officer of the Computing and Technology Society (NUCATS), the university's largest Technology-oriented society</p>
                  <p>• As the Outreach Officer, I managed teams of university students who were sent into school to teach Computer Science, in order to encourage more interest in the subject. This allowed us to ensure that
                    all students, regardless of their area’s resources or socioeconomic status, can learn and be inspired. </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card onClick = {() => changeSpecificChevron(4)}>
              <Accordion.Toggle as={Card.Header} eventKey="3" class = "accordionBody">
                <div class = "companyAndDate">
                  <p class="companyTitle">Debating Society</p>
                  <p class="roleDate">May 2018 - Feb 2019</p>
                </div>

                <div class = "roleAndChevron">
                  <p>Competitions Convenor</p>
                  <div class = "chevronIcon">
                    {fourthChevron ? <FiChevronRight />: <FiChevronDown />}
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p>• Managed international debating competitions that each generated approx. £1000</p>
                  <p>• Automated repetitive tasks by creating tailored Excel workbooks and achieved
                    a 70% time reduction, freeing up more time and resources for both myself and future successors</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

          </Accordion>
        </div>

      </div>
    </>
  )
}

export default Extracurricular;
