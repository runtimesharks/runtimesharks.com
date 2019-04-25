import React from "react"
import AnimatedContainer from "../components/containers/AnimatedContainer"
import Content from "../components/Content"
import GetInTouch from "../components/GetInTouch"
import FromZero from "../components/mentoring/FromZero"
import IOS from "../components/mentoring/IOS"

const Mentoring = () => (
	<>
		<Content>
			<AnimatedContainer delay={AnimatedContainer.baseDelay}>
				<FromZero />
			</AnimatedContainer>
			<AnimatedContainer delay={AnimatedContainer.baseDelay + 0.25}>
				<IOS />
			</AnimatedContainer>
		</Content>
		<AnimatedContainer delay={AnimatedContainer.baseDelay + 0.5}>
			<GetInTouch section="mentoring" />
		</AnimatedContainer>
	</>
)

export default Mentoring
