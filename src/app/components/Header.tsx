import React from "react"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import Theme from "../theme/Theme"

const Header = () => {
	return (
		<>
			<Container className="side-padded">
				<Link to="/">
					<FirstHalf>runtime</FirstHalf>
					<SecondHalf>sharks</SecondHalf>
				</Link>
				<Subtitle>Improving the world, one bit at a time</Subtitle>
			</Container>
			<Padding className="nav-padding" />
		</>
	)
}

const Container = styled.div`
	padding: 1.5em 20px 1em;
	text-align: right;
	max-width: ${Theme.maxWidth};
	margin: auto;

	& a,
	a:hover {
		border-bottom-color: transparent;
	}
`

const Title = styled.h1`
	display: inline-block;
	margin-bottom: 0;
	font-size: 2.1em;
	font-weight: 600;
	line-height: 1.2em;
	font-family: ${Theme.headerFont};

	@media screen and (max-width: 330px) {
		font-size: 1.9em;
	}
`

const appearFromAbove = keyframes`
	from {
		opacity: 0;
		transform: translateY(-20px);
	}

	to {
		opacity: 1;
		transform: translateY(0px);
	}
`

const Subtitle = styled.h2`
	font-style: italic;
	font-size: 0.8em;
	font-weight: 400;
	line-height: 1.5em;
	margin-top: -5px;
	opacity: 0;

	animation: ${appearFromAbove} 0.75s 0.5s forwards ease-in-out;
`

const FirstHalf = styled(Title)`
	color: ${Theme.darkBlue};
`

const SecondHalf = styled(Title)`
	color: ${Theme.linkColor};
`

const Padding = styled.div`
	height: 24px;
	padding: 1em;
	display: none;

	&.visible {
		display: block;
	}

	@media screen and (max-width: 630px) {
		height: 76px;
	}
`

export default Header
