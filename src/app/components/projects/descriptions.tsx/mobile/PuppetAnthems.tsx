import React from "react"
import Project from "../../../../pages/Project"
import ProjectContainer from "../../../containers/ProjectContainer"

const PuppetAnthems = (props: any) => (
	<Project {...props} centered>
		<ProjectContainer>
			The fun way to learn about national anthems, for adults and kids alike.
			All the lyrics, the music, the history, and all the info related to the 32
			countries from the 2014 World Cup in one great app.
		</ProjectContainer>
	</Project>
)

export default PuppetAnthems
