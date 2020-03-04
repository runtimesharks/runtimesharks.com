import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../AnimatedContainer"

const TeamCards = (props: any) => (
  <Project {...props}>
    <AnimatedContainer>
      In 2019 we envisioned a simple tool that would allow anyone to create and
      manage an about page, where one or several teams are presented. And that's
      how <a href="https://team.cards">team.cards</a> came to life.
    </AnimatedContainer>
    <br />
    <AnimatedContainer position={2}>
      There are many existing solutions, but all require technical knowledge,
      even if just a little. Another option is to hire an agency that would
      build it, but the costs can go up quite fast. The last option is to use
      your own developers to create it, but that translates into indirect costs
      as well, just as high.
    </AnimatedContainer>
    <br />
    <AnimatedContainer position={4}>
      Written with <a href="https://nodejs.org/en">Node.js</a>,{" "}
      <a href="http://expressjs.com/">Express</a> and{" "}
      <a href="https://reactjs.org">React</a>.
      <br />
      <br />
      <em>[Discontinued as of 2020]</em>
    </AnimatedContainer>
  </Project>
)

export default TeamCards
