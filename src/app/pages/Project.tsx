import React from "react"
import { Redirect } from "react-router"
import styled from "styled-components"
import AnimatedContainer from "../components/containers/AnimatedContainer"
import ExternalButtons from "../components/projects/ExternalButtons"
import Gallery from "../components/projects/Gallery"
import Image from "../components/projects/Image"
import mobileProjects from "../models/mobileProjects"
import ProjectModel from "../models/Project"

interface DescriptionStyle {
	centered: boolean
}

const Project = (props: any) => {
	const param = props.match.path.replace("/projects/", "")
	const project = mobileProjects.find((p) => p.slug === param)

	if (project == null) {
		return <Redirect to="/" />
	}

	return (
		<AnimatedContainer>
			<Container {...props}>
				<Header>
					<Link href={project.link} color={project.color}>
						{project.name}
					</Link>
				</Header>
				<Meta>
					<StyledImage {...project} />
					<Description centered={props.centered}>
						{props.children}
						<AnimatedContainer position={2}>
							<ExternalButtons {...project} />
						</AnimatedContainer>
					</Description>
				</Meta>
				{project.gallery.length > 0 ? (
					<AnimatedContainer position={3}>
						<Gallery {...project} />
					</AnimatedContainer>
				) : null}
			</Container>
		</AnimatedContainer>
	)
}

const Container = styled.div`
	margin-top: 4em;
`

const Header = styled.header`
	text-align: center;
	margin-bottom: 2.5em;
	font-size: 1.6em;
	font-weight: 600;
	letter-spacing: 0.5px;
`

const Link = styled.a`
	color: ${(props: ProjectModel) => props.color};
	border-bottom-style: hidden; /* This isn't animatable, wtf */
	border-bottom-color: transparent;
`

const Meta = styled.div`
	margin-top: 3em;
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 60px;
	justify-content: center;

	@media screen and (max-width: 650px) {
		justify-items: center;
		grid-template-columns: auto;
		text-align: center;
	}
`

const StyledImage = styled(Image)``

const Description = styled.div<DescriptionStyle>`
	max-width: 500px;
	align-self: center;
	${(props: DescriptionStyle) =>
		props.centered ? "text-align: center;" : null};
`

export default Project
