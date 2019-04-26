import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../containers/AnimatedContainer"

const RolandLeth = (props: any) => (
	<Project {...props}>
		<AnimatedContainer>
			Roland has used his blog both to write and teach others, but also as a
			training ground for learning new technologies. Throughout the years he
			built it with{" "}
			<a href="https://github.com/rolandleth/rolandleth.com/tree/sinatra">
				Sinatra
			</a>
			,{" "}
			<a href="https://github.com/rolandleth/rolandleth.com/tree/node">
				Node.js
			</a>
			, or{" "}
			<a href="https://github.com/rolandleth/rolandleth.com/tree/swift-vapor">
				Vapor
			</a>
			.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={2}>
			We thought it's time to get up to speed with modern times, so we rewrote
			it with <a href="https://nodejs.org/en">Node.js</a>,{" "}
			<a href="http://expressjs.com/">Express</a> and{" "}
			<a href="https://reactjs.org">React</a>, bringing a better structure and
			modern JavaScript to the project and opening the way to more easily
			improve it in the future.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={3}>
			The source code is open source and you can find it below.
		</AnimatedContainer>
	</Project>
)

export default RolandLeth
