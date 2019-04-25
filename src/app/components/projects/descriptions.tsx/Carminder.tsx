import React from "react"
import Project from "../../../pages/Project"
import ProjectContainer from "../../containers/ProjectContainer"

const Carminder = (props: any) => (
	<Project {...props} centered>
		<ProjectContainer>
			Helps you keep track of your car's maintenance. See all your car's events
			at a glance and easily add a reminder, and how often you'd like to be
			reminded. <em>[Discontinued in 2014, resurected in 2018]</em>
		</ProjectContainer>
	</Project>
)

export default Carminder
