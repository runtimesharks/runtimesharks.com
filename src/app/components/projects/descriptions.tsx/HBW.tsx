import React from "react"
import Project from "../../../pages/Project"
import AnimatedContainer from "../../containers/AnimatedContainer"

const HBW = (props: any) => (
	<Project {...props}>
		<AnimatedContainer>
			Hey, Be Well! is a platform that helps people achieve their wellbeing
			goals. We joined forces with the client to create a truly challenging app.
			They had the idea, the design and the plan, we made the iOS app happen.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={2}>
			In close cooperation with their CTO, CPO and UI/UX Lead, we managed to
			overcome all the obstacles, both technical and regarding the user's
			experience; we offered constant feedback and proposed new solutions when
			needed.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={3}>
			Hey, Be Well! is one of the most challenging projects we have worked on,
			but also one of the most rewarding. A well designed, well thought app,
			with a wonderful purpose.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={4}>
			We're <strong>extremely</strong> proud to be part of their journey!
		</AnimatedContainer>
	</Project>
)

export default HBW
