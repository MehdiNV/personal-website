import React from "react"
import './componentsCSS/background.css'
import BackgroundImage from './backgroundImage'

const Background = () => {

  return (
    <>
      <div class="backgroundSection">

        <div id="backgroundContent">
          <h3> Hey there! 👋</h3>
          <p>I'm Mehdi, a Computer Science undergraduate at Newcastle University. At the moment, I'm
            working as a Software Engineering Intern at WonderBill! </p>

          <p>I'm passionate about Technology in all its aspects, whether it be designing innovative
            solutions or managing teams of Computer Science mentors in order to teach CS in the local community and inspire the next generation of coders.
            Outside of programming, I can usually be found fencing,
            teaching or debating.</p>

          <p id="accolades">Accolades: 🏆</p>
          <p class = "accoladesInfo">• Computer Science, IT and Physics Undergraduate of the Year 2019</p>
          <p class = "accoladesInfo">• Overall Finalist at Hack the Burgh V</p>
          <p class = "accoladesInfo">• Competitive Debator for Newcastle University</p>
        </div>

        <div id="backgroundImage">
          <BackgroundImage />
        </div>

      </div>
    </>
  )

}

export default Background;
