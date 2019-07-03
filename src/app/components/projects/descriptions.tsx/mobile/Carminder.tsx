import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../AnimatedContainer";

const Carminder = (props: any) => (
	<Project {...props} centered>
		<AnimatedContainer>
			Helps you keep track of your car's maintenance. See all your car's events
			at a glance and easily add a reminder, and how often you'd like to be
			reminded. <em>[Discontinued in 2014, resurected in 2018]</em>
		</AnimatedContainer>
	</Project>
)

export default Carminder
