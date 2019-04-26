import React from "react"
import Project from "../../../../pages/Project"
import ProjectContainer from "../../../containers/ProjectContainer"

const MyTravelStories = (props: any) => (
	<Project {...props} centered>
		<ProjectContainer>
			Travel, take beautiful photos, write down your feelings and create your
			travel journal. Share your stories with the world and find inspiration
			from others for your next trips!
		</ProjectContainer>
	</Project>
)

export default MyTravelStories
