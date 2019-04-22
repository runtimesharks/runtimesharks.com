import React from "react"
import AnimatedContainer from "../components/AnimatedContainer"
import Content from "../components/Content"
import GetInTouch from "../components/GetInTouch"
import FromZero from "../components/mentoring/FromZero"
import IOS from "../components/mentoring/IOS"

const Mentoring = () => (
	<AnimatedContainer>
		<Content>
			<FromZero />
			<IOS />
		</Content>
		<GetInTouch section="mentoring" />
	</AnimatedContainer>
)

export default Mentoring
