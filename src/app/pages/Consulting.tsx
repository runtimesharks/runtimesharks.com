import React from "react"
import AnimatedContainer from "../components/AnimatedContainer"
import Practices from "../components/consulting/Practices"
import Review from "../components/consulting/Review"
import Software from "../components/consulting/Software"
import Content from "../components/Content"
import GetInTouch from "../components/GetInTouch"
import Helmet from "../utils/Helmet"

const Consulting = () => (
  <>
    <Helmet title="Runtime Sharks: Consulting" />
    <Content>
      <AnimatedContainer>
        <Practices />
      </AnimatedContainer>
      <AnimatedContainer position={2}>
        <Review />
      </AnimatedContainer>
      <AnimatedContainer position={3}>
        <Software />
      </AnimatedContainer>
    </Content>
    <AnimatedContainer position={4}>
      <GetInTouch section="consulting" />
    </AnimatedContainer>
  </>
)

export default Consulting
