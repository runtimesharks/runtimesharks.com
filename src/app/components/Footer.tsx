import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Theme from "../theme/Theme"

const Footer = () => (
	<Container className="centered side-padded" role="contentinfo">
		<Quote>
			<p>
				If you're going to be greedy, be greedy about improving yourself. If
				you're going to take advantage of anything, take advantage of the tools
				at your disposal to do the best job that you can. If you're going to
				pursue anything, pursue a better self.
				<A rel="me" href="https://mastodon.social/@rolandleth">
					.
				</A>
			</p>
		</Quote>
		<Copyright>
			&copy;&nbsp;2017–{new Date().getFullYear()}&nbsp;Runtime
			Sharks&nbsp;&mdash;&nbsp;
			<Link to="/privacy/runtimesharks">Privacy Policy</Link>
		</Copyright>
	</Container>
)

const A = styled.a`
	width: 0;
	height: 0;
	cursor: default;
	color: transparent;
`

const Container = styled.footer`
	max-width: ${Theme.maxWidth};
	border-top: solid 0.5px ${Theme.gray};
	padding-top: 0.75em;
	margin: 7em auto 1em;
	line-height: 1.35em;
	font-size: 0.8em;
	font-weight: 500;
`

const Quote = styled.h4`
	font-style: italic;
	font-size: 0.8em;
	font-weight: 300;
`

const Copyright = styled.div`
	margin: 1.25em 0;
`

export default Footer
