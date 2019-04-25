import React from "react"
import Practices from "../components/consulting/practices"
import Review from "../components/consulting/Review"
import Software from "../components/consulting/Software"
import AnimatedContainer from "../components/containers/AnimatedContainer"
import Content from "../components/Content"
import GetInTouch from "../components/GetInTouch"

const Consulting = () => (
	<>
		<Content>
			<AnimatedContainer delay={AnimatedContainer.baseDelay}>
				<Practices />
			</AnimatedContainer>
			<AnimatedContainer delay={AnimatedContainer.baseDelay + 0.25}>
				<Review />
			</AnimatedContainer>
			<AnimatedContainer delay={AnimatedContainer.baseDelay + 0.5}>
				<Software />
			</AnimatedContainer>
		</Content>
		<AnimatedContainer delay={AnimatedContainer.baseDelay + 0.75}>
			<GetInTouch section="consulting" />
		</AnimatedContainer>
	</>
)

export default Consulting
