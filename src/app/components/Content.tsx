import React from "react"
import styled from "styled-components"

const Content = ({ children }) => (
	<Container className="side-padded">{children}</Container>
)

const Container = styled.div`
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

export default Content
