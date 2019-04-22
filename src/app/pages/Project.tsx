import React from "react"

const Project = (props: any) => {
	return <div>{props.match.params.project} works!</div>
}

export default Project
