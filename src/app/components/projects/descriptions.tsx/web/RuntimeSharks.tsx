import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../AnimatedContainer"

const RuntimeSharks = (props: any) => (
	<Project {...props}>
		<AnimatedContainer>
			The first iteration of this website was a server rendered one, created
			with <a href="https://vapor.codes">Vapor</a>, a server side framework
			based on Swift. We eventually realized it would be a good idea to
			modernize it, so we rewrote it with{" "}
			<a href="https://nodejs.org/en">Node.js</a>,{" "}
			<a href="http://expressjs.com/">Express</a> and{" "}
			<a href="https://reactjs.org">React</a>.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={2}>
			This allowed us to make use of modern JavaScript frameworks and bring some
			liveliness to our website. In the process we also greatly improved the
			structure. The source code is open source and you can find it below.
		</AnimatedContainer>
	</Project>
)

export default RuntimeSharks
