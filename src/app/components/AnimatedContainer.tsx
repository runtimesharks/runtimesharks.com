import React, { useContext } from "react"
import styled, { css, keyframes } from "styled-components"
import InitialAnimationContext from "../utils/InitialAnimationContext"

interface StyleProps {
	didAnimate: boolean
	delay: number
}

const AnimatedContainer = ({ delay = 0.5, children }: any) => {
	const didAnimate = useContext(InitialAnimationContext)

	return (
		<Container className="side-padded" didAnimate={didAnimate} delay={delay}>
			{children}
		</Container>
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

const Container = styled.div<StyleProps>`
	${(props: StyleProps) =>
		props.didAnimate
			? null
			: css`
					opacity: 0;
					animation: ${appearFromBelow} 0.75s ${props.delay}s forwards
						ease-in-out;
			  `}
`

export default AnimatedContainer
