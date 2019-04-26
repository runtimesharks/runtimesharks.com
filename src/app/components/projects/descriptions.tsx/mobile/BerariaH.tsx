import React from "react"
import Project from "../../../../pages/Project"
import ProjectContainer from "../../../containers/ProjectContainer"

const BerariaH = (props: any) => (
	<Project {...props} centered>
		<ProjectContainer>
			In 2017, Roland worked with{" "}
			<a href="http://www.sniperlab.com">Sniperlab</a> to create an app for the
			largest beer hall in Europe, <a href="http://berariah.ro">Beraria H</a>.
			The result is an easy way for its customers to browse for, book and
			check-in at events.
		</ProjectContainer>
	</Project>
)

export default BerariaH
