import React from "react"
import { Redirect } from "react-router"
import allProjects from "../models/AllProjects"

const Project = (props: any) => {
	const project = props.match.params.project

	if (
		project == null ||
		allProjects.filter((p) => p.slug === project).length === 0
	) {
		return <Redirect to="/" />
	}

	return <div>{props.match.params.project} works!</div>
}

export default Project
