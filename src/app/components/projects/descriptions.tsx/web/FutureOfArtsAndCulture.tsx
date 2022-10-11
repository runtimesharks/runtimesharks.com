import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../AnimatedContainer"

const FutureOfArtsAndCulture = (props: any) => (
	<Project {...props}>
		<AnimatedContainer>
			Roland served as Head of Digital for{" "}
			<a href="https://therme.media" title="Therme Media">
				Therme Media
			</a>
			,{" "}
			<a href="https://thermegroup.com" title="Therme Group">
				Therme Group
			</a>
			's digital agency, and one of the projects he built was the{" "}
			<a href="https://futureofartsandculture.org" title="Future of Arts">
				Future of Arts and Culture
			</a>{" "}
			website, a qualitative probe into the future of arts and culture globally.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={1}>
			The website was created with React.js and Node.js, it is fully responsive
			and follows the provided designs in a pixel-perfect fashion.
		</AnimatedContainer>
	</Project>
)

export default FutureOfArtsAndCulture
