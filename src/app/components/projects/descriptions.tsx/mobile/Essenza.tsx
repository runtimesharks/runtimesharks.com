import React from "react"
import Project from "../../../../pages/Project"
import ProjectContainer from "../../../containers/ProjectContainer"

const Essenza = (props: any) => (
	<Project {...props} centered>
		<ProjectContainer>
			In 2018, <a href="http://www.christian-boegner.ch/">Christian Boegner</a>{" "}
			has reached out to us for what appears to be a simple app, but it has a
			lot of value. Always have a handy list of self improvement essentials and
			takeaways.
		</ProjectContainer>
	</Project>
)

export default Essenza
