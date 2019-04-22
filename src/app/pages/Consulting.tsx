import React from "react"
import AnimatedContainer from "../components/AnimatedContainer"
import Practices from "../components/consulting/practices"
import Review from "../components/consulting/Review"
import Software from "../components/consulting/Software"
import Content from "../components/Content"

const Consulting = () => (
	<AnimatedContainer>
		<Content>
			<Practices />
			<Review />
			<Software />
		</Content>
		<div className="centered side-padded">
			If you're interested, please{" "}
			<a href="mailto:consulting@runtimesharks.com">get in touch</a>; we'd love
			to talk.
		</div>
	</AnimatedContainer>
)

export default Consulting
