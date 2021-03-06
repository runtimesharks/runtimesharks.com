import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../AnimatedContainer"

const Goalee = (props: any) => (
  <Project {...props} centered>
    <AnimatedContainer delay={0.75}>
      What drives you each day? What matters to you the most? Remind yourself
      often, so you don't forget what your true goals in life are!
    </AnimatedContainer>
  </Project>
)

export default Goalee
