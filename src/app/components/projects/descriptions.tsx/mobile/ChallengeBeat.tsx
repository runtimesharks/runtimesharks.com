import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../AnimatedContainer";

const ChallengeBeat = (props: any) => (
	<Project {...props} centered>
		<AnimatedContainer>
			In collaboration with{" "}
			<a href="https://www.linkedin.com/in/tiagodanielmsfernandes">
				Tiago Fernandes
			</a>{" "}
			and <a href="http://www.christian-boegner.ch/">Christian Boegner</a>,
			ChallengeBeat has been one of the first projects we worked on. Challenge
			yourself and/or your friends and build better habits!
		</AnimatedContainer>
	</Project>
)

export default ChallengeBeat
