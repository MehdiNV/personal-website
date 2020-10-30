import React, { useState } from "react"
import ExperiencesImage from './experiencesImage'
import './componentsCSS/experiences.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const Experiences = () => {
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
      default:
        throw new Error("Unexpected chevron value received")
    }
  }

  return (
      <>
        <div class = "experienceSection">
          <div id = "experiencesContent">
            <p id = "sectionText">Outside of my studies, I have gotten involved with some amazing companies doing awesome work. Take a look at a snapshot of my professional work:</p>

            <Accordion defaultActiveKey="0">
              <Card onClick = {() => changeSpecificChevron(1)}>
                <Accordion.Toggle as={Card.Header} eventKey="0" class = "accordionBody">
                  <div class = "companyAndDate">
                    <p class="companyTitle">WonderBill</p>
                    <p class="roleDate">Sep 2019 - Aug 2020</p>
                  </div>

                  <div class = "roleAndChevron">
                    <p>Software Engineering Intern</p>
                    <div class = "chevronIcon">
                      {firstChevron ? <FiChevronRight />: <FiChevronDown />}
                    </div>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>• Built a feature to monitor the progress of linking accounts, improving the experience of ~100K users on iOS/Android</p>
                    <p>• Deployed web scraper fixes across 20+ utility providers, resolving 7400+ errors (Tech: JS, React, React Native, Redux)</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card onClick = {() => changeSpecificChevron(2)}>
                <Accordion.Toggle as={Card.Header} eventKey="1" class = "accordionBody">
                  <div class = "companyAndDate">
                    <p class="companyTitle">Visa</p>
                    <p class="roleDate">Jun - Aug 2019</p>
                  </div>

                  <div class = "roleAndChevron">
                    <p>Software Engineering Intern</p>
                    <div class = "chevronIcon">
                      {secondChevron ? <FiChevronRight />: <FiChevronDown />}
                    </div>
                  </div>
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

              <Card onClick = {() => changeSpecificChevron(3)}>
                <Accordion.Toggle as={Card.Header} eventKey="2" class = "accordionBody">
                  <div class = "companyAndDate">
                    <p class="companyTitle">Shearman & Sterling LLP</p>
                    <p class="roleDate">Jul - Jul 2018</p>
                  </div>

                  <div class = "roleAndChevron">
                    <p>Knowledge Management Summer Intern</p>
                    <div class = "chevronIcon">
                      {thirdChevron ? <FiChevronRight />: <FiChevronDown />}
                    </div>
                  </div>
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

              <Card onClick = {() => changeSpecificChevron(4)}>
                <Accordion.Toggle as={Card.Header} eventKey="3" class = "accordionBody">
                  <div class = "companyAndDate">
                    <p class="companyTitle">BBC</p>
                    <p class="roleDate">Jan - May 2018</p>
                  </div>

                  <div class = "roleAndChevron">
                    <p>Computer Science Mentor (Contract role)</p>
                    <div class = "chevronIcon">
                      {fourthChevron ? <FiChevronRight />: <FiChevronDown />}
                    </div>
                  </div>
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

          <div id = "experiencesImage">
            <ExperiencesImage />
          </div>


        </div>
      </>
  )
}


export default Experiences;
