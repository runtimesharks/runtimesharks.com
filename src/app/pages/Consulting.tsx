import React from "react"
import Practices from "../components/consulting/Practices"
import Review from "../components/consulting/Review"
import Software from "../components/consulting/Software"
import AnimatedContainer from "../components/containers/AnimatedContainer"
import Content from "../components/Content"
import GetInTouch from "../components/GetInTouch"

const Consulting = () => (
	<>
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
