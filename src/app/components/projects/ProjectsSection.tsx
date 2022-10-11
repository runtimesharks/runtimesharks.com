import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import Project from "../../models/Project"
import AnimatedContainer from "../AnimatedContainer"

interface Props {
	projects: Project[]
	title: string
	offset?: number
	disableAnimation?: boolean
}

interface ImageStyle {
	isDiscontinued: boolean
	isExternal: boolean
}

const Icon = ({ name, icon, projectType, discontinuedAt }: Project) => (
	<ImageContainer>
		<Img src={icon} alt={`${name}'s icon`} />
		<Overlay
			isExternal={projectType !== "Own"}
			isDiscontinued={discontinuedAt !== undefined}
		>
			<OverlayText
				isExternal={projectType !== "Own"}
				isDiscontinued={discontinuedAt !== undefined}
			>
				{projectType === "Client"
					? "Client"
					: projectType === "Employee"
					? "Employee"
					: discontinuedAt !== undefined
					? "Discontinued"
					: ""}
			</OverlayText>
		</Overlay>
	</ImageContainer>
)

const ProjectsSection = ({
	projects,
	title,
	offset = 0,
	disableAnimation = false,
}: Props) => (
	<AnimatedContainer
		position={offset + 1}
		delay={offset > 0 ? 0.125 : undefined}
		disableAnimations={disableAnimation}
	>
		{
			// @ts-ignore
			<a name={title.toLowerCase()} />
		}
		<Title>{title}</Title>
		<Container>
			<Grid>
				{projects.map((project, index) => {
					return (
						<AnimatedContainer
							key={project.slug}
							position={offset + index + 1}
							delay={0.125}
							sidepaded={false}
							disableAnimations={disableAnimation}
						>
							{project.link.startsWith("/") ? (
								<Link to={project.link}>
									<Icon {...project} />
								</Link>
							) : (
								<a href={project.link}>
									<Icon {...project} />
								</a>
							)}
							<IconTitle>{project.name}</IconTitle>
						</AnimatedContainer>
					)
				})}
			</Grid>
		</Container>
	</AnimatedContainer>
)

const Container = styled.div`
	display: flex;
	justify-content: center;
`

const Title = styled.h2`
	margin: 2em 0 2em;
	text-align: center;
`

const Grid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fit, 100px);
	grid-column-gap: 40px;
	grid-row-gap: 30px;
	justify-content: center;

	color: gray;
	text-align: center;
	font-weight: 500;
	font-size: 0.75em;

	a,
	a:hover {
		border-bottom: none;
	}
`

const Img = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 18px;

	box-shadow: #777777 0 0 7px 0;
`

const ImageContainer = styled.div`
	position: relative;
`

const Overlay = styled.div`
	display: grid;
	background: rgba(
		0,
		0,
		0,
		${(props: ImageStyle) =>
			props.isDiscontinued ? 0.8 : props.isExternal ? 0.25 : 0}
	);
	position: absolute;
	border-radius: 18px;
	top: 0;
	left: 0;
	width: 100px;
	height: 100px;
`

const OverlayText = styled.h5`
	${(props: ImageStyle) =>
		props.isDiscontinued
			? css`
					justify-self: center;
					align-self: center;
					transform: rotate(-45deg);
			  `
			: css`
					justify-self: flex-start;
					align-self: flex-end;
					padding: 0 0 10px 10px;
			  `};

	color: white;
	font-weight: 600;
	letter-spacing: 1px;
`

const IconTitle = styled.span`
	display: block;
	margin: 0.3em 0 0;
`

export default ProjectsSection
