import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import AnimatedContainer from "../components/AnimatedContainer"
import Content from "../components/Content"
import ContactUs from "../components/projects/ContactUs"
import ProjectsSection from "../components/projects/ProjectsSection"
import macProjects from "../models/macProjects"
import mobileProjects from "../models/mobileProjects"
import webProjects from "../models/webProjects"

const Projects = () => (
	<>
		<Helmet>
			<title>Runtime Sharks: Projects</title>
		</Helmet>
		<StyledContent>
			<AnimatedContainer>
				<ContactUs />
			</AnimatedContainer>
			<Spacer />
			<ProjectsSection title="Mobile " projects={mobileProjects} />
			<Spacer />
			<ProjectsSection
				title="Mac"
				projects={macProjects}
				offset={mobileProjects.length}
			/>
			<Spacer />
			<ProjectsSection
				title="Web"
				projects={webProjects}
				offset={mobileProjects.length + macProjects.length}
			/>
		</StyledContent>
	</>
)

const StyledContent = styled(Content)`
	margin-top: 1em;
	max-width: 700px;
`

const Spacer = styled.div`
	padding: 1em 0;
`

export default Projects
