import React, { useContext } from "react"
import styled, { css, keyframes } from "styled-components"
import Content from "../components/Content"
import ContactUs from "../components/projects/ContactUs"
import allProjects from "../models/AllProjects"
import InitialAnimationContext from "../utils/InitialAnimationContext"

interface ItemStyle {
	index: number
	didAnimate: boolean
}

const Projects = () => {
	const didAnimate = useContext(InitialAnimationContext)

	return (
		<StyledContent>
			<ContactUs />
			<Grid>
				{allProjects.map((project, index) => {
					return (
						<Item key={project.slug} index={index} didAnimate={didAnimate}>
							<a className="image" href={project.link}>
								<Icon
									src={`/images/projects/icons/${project.slug}.jpg`}
									alt={`${project.name}'s icon`}
								/>
							</a>
							<IconTitle>{project.name}</IconTitle>
						</Item>
					)
				})}
			</Grid>
		</StyledContent>
	)
}

const appearFromBelow = keyframes`
	from {
		opacity: 0;
		transform: translateY(20px);
	}

	to {
		opacity: 1;
		transform: translateY(0px);
	}
`

const StyledContent = styled(Content)`
	margin-top: 1em;
	max-width: 700px;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-column-gap: 40px;
	grid-row-gap: 30px;
	justify-content: center;

	margin-top: 6em;
	color: gray;
	text-align: center;
	font-weight: 500;
	font-size: 0.75em;

	a {
		border-bottom: none;
	}

	@media screen and (max-width: 630px) {
		grid-template-columns: repeat(3, auto);
	}

	@media screen and (max-width: 430px) {
		grid-template-columns: repeat(2, auto);
	}

	@media screen and (max-width: 290px) {
		grid-template-columns: auto;
	}
`

const Item = styled.div`
	${(props: ItemStyle) =>
		props.didAnimate
			? null
			: css`
					z-index: 0; /* Due to the animation, they appear above the navbar.*/
					opacity: 0;
					animation: ${appearFromBelow} 0.75s ${`${props.index * 0.2}s`}
						forwards ease-in-out;
			  `}
`

const Icon = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 18px;

	box-shadow: #777777 0 0 7px 0;
`

const IconTitle = styled.span`
	display: block;
	margin: -0.2em 0 0;
`

export default Projects
