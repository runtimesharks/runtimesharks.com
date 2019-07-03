import React from "react"
import Helmet from "react-helmet"
import AnimatedContainer from "../components/AnimatedContainer"
import Content from "../components/Content"
import GetInTouch from "../components/GetInTouch"
import FromZero from "../components/mentoring/FromZero"
import IOS from "../components/mentoring/IOS"

const Mentoring = () => (
	<>
		<Helmet>
			<title>Runtime Sharks: Mentoring</title>
		</Helmet>
		<Content>
			<AnimatedContainer>
				<FromZero />
			</AnimatedContainer>
			<AnimatedContainer position={2}>
				<IOS />
			</AnimatedContainer>
		</Content>
		<AnimatedContainer position={3}>
			<GetInTouch section="mentoring" />
		</AnimatedContainer>
	</>
)

export default Mentoring
