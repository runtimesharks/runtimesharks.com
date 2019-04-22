import React from "react"
import AnimatedContainer from "../components/AnimatedContainer"
import Practices from "../components/consulting/practices"
import Review from "../components/consulting/Review"
import Software from "../components/consulting/Software"
import Content from "../components/Content"
import GetInTouch from "../components/GetInTouch"

const Consulting = () => (
	<AnimatedContainer>
		<Content>
			<Practices />
			<Review />
			<Software />
		</Content>
		<GetInTouch section="consulting" />
	</AnimatedContainer>
)

export default Consulting
