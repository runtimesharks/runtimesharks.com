import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Theme from "../theme/Theme"
import AnimatedContainer from "./containers/AnimatedContainer"

interface LinkProps {
	position: number
}

const Navigation = () => {
	return (
		<>
			<Container className="navigation centered" role="navigation">
				<Nav>
					<Link position={0}>
						<NavLink to="/projects">Projects</NavLink>
					</Link>
					{/* <NavLink to="/workshops">Workshops</NavLink> */}
					<Link position={1}>
						<NavLink to="/mentoring">Mentoring</NavLink>
					</Link>
					<Link position={2}>
						<a href="https://team.cards/runtime-sharks">Our Team</a>
					</Link>
					<Link position={3}>
						<NavLink to="/consulting">Consulting</NavLink>
					</Link>
				</Nav>
			</Container>
		</>
	)
}

const Container = styled.div`
	/* The fading in animation makes everything be above the navbar */
	z-index: 1;
	padding: 0.7em 0 0.5em;
	margin: auto;

	&.fixed {
		position: fixed;
		top: 0;
		background: rgba(255, 255, 255, 0.8);
		width: 100%;
		border-bottom: 0.5px solid ${Theme.linkColor};
		-webkit-backdrop-filter: blur(10px);

		@media (prefers-color-scheme: dark) {
			background: ${`${Theme.darkBackgroundColor}cc`};
		}
	}

	@media screen and (max-width: 630px) {
		padding: 0.9em 0 0.9em;
	}
`

const Nav = styled.nav`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	grid-row-gap: 6px;

	text-align: center;
	max-width: ${Theme.maxWidth};
	margin: auto;

	@media screen and (max-width: 630px) {
		grid-template-columns: repeat(2, minmax(150px, 1fr));
		max-width: 460px;
	}

	@media screen and (max-width: 300px) {
		grid-template-columns: repeat(2, minmax(100px, 1fr));
		font-size: 0.8em;
	}

	@media screen and (max-width: 260px) {
		font-size: 0.5em;
	}
`

const Link = styled.div<LinkProps>`
	opacity: 0;

	& a {
		display: inline-block;
		border-bottom-color: transparent;

		font-family: ${Theme.headerFont};
		font-size: 1em;
		color: ${Theme.linkColor};
		border-radius: 8px;
		padding: 2px 20px;

		${Theme.transition("all", "0.25s")}

		&:hover {
			border-bottom-color: transparent;
			background: ${Theme.linkColor} none repeat;
			color: white;
			box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px;
			transform: translateY(-3px);
		}

		&.active {
			border-top: 1px solid ${Theme.linkColor};
			/* Due to the inline-block display, when adding the border
			Everything else gets pushed down by 1px;
			*/
			margin-top: -1px;
		}
	}

	animation: appear 0.75s
		${(props: LinkProps) =>
			`${0.75 + props.position * AnimatedContainer.baseDelay}s`}
		forwards ease-in-out;

	@keyframes appear {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
`

export default Navigation
