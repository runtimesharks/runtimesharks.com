import React, { useContext } from "react"
import styled, { css, keyframes } from "styled-components"
import InitialAnimationContext from "../utils/InitialAnimationContext"

interface StyleProps {
	didAnimate: boolean
}

const AnimatedContainer = ({ children }) => {
	const didAnimate = useContext(InitialAnimationContext)

	return <Container didAnimate={didAnimate}>{children}</Container>
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

const Container = styled.div`
	${(props: StyleProps) =>
		props.didAnimate
			? null
			: css`
					opacity: 0;
					animation: ${appearFromBelow} 0.75s 0.5s forwards ease-in-out;
			  `}
`

export default AnimatedContainer
