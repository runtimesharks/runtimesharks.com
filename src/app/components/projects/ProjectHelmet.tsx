import React from "react"
import Helmet from "react-helmet"
import Project from "../../models/Project"

const ProjectHelmet = (project: Project) => {
	return (
	<Helmet>
		<title>Runtime Sharks: {project.name}</title>
		<meta name="description" content={project.summary} />
		<meta property="og:title" content={project.name} />
		{project.summary == null ? null : (
			<meta property="og:description" content={project.summary} />
		)}
		<meta property="og:image" content={project.icon} />
	</Helmet>
)}

export default ProjectHelmet
