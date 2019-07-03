import React, { useContext } from "react"
import Helmet from "react-helmet"
import Project from "../../models/Project"
import LocationContext from "../../utils/LocationContext"

const ProjectHelmet = (project: Project) => {
	let location = useContext(LocationContext)

	// We use the `window`'s location when rendering on the client.
	// Used when we need the full URL, like canonical or OG tags.
	if (location == null) {
		location = window.location.href
	}

	let url = new URL(location!)

	return (
		<Helmet>
			<title>Runtime Sharks: {project.name}</title>
			<meta name="description" content={project.summary} />
			<meta property="og:title" content={project.name} />
			<meta name="date" content={project.date} />
			{project.summary == null ? null : (
				<meta property="og:description" content={project.summary} />
			)}
			<meta property="og:image" content={`${url.origin}${project.image}`} />
		</Helmet>
	)
}

export default ProjectHelmet
