import React from "react"
import styled, { keyframes } from "styled-components"
import Apps from "../components/home/Apps"
import Experience from "../components/home/Experience"
import Teaching from "../components/home/Teaching"

const Home = () => (
	<Container>
		<Content className="side-padded">
			<Apps />
			<Experience />
			<Teaching />
		</Content>
		<div className="centered side-padded">
			Please check out the other sections of our site, <br />
			or <a href="mailto:contact@runtimesharks.com">get in touch</a>; we'd love
			to talk.
		</div>
	</Container>
)

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

const Container = styled.div`
	opacity: 0;
	animation: ${appearFromBelow} 0.75s 0.5s forwards ease-in-out;
`

const Content = styled.div`
	padding-top: 3em;
	padding-bottom: 2em;
	margin: auto;
	max-width: 600px;

	& h1 {
		font-weight: 600;
		font-size: 1.2em;
		padding: 1em 0 0;
	}

	& p {
		padding: 0.25em 0;
	}
`

export default Home
