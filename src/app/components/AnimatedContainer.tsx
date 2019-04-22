import React from "react"
import styled, { keyframes } from "styled-components"

const AnimatedContainer = ({ children }) => <Container>{children}</Container>

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

export default AnimatedContainer
