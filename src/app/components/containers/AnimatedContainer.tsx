import React, { useContext } from "react"
import styled, { css, keyframes } from "styled-components"
import InitialAnimationContext from "../../utils/InitialAnimationContext"

interface StyleProps {
	didAnimate: boolean
	delay: number
	forced: boolean
}

const AnimatedContainer = ({
	delay = 0.25,
	forced = true,
	sidepaded = true,
	children,
}: any) => {
	const didAnimate = useContext(InitialAnimationContext)

	return (
		<Container
			className={`${sidepaded ? "side-padded" : null}`}
			didAnimate={didAnimate}
			delay={delay}
			forced={forced}
		>
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
		props.didAnimate && !props.forced
			? null
			: css`
					opacity: 0;
					animation: ${appearFromBelow} 0.75s ${props.delay}s forwards
						ease-in-out;
			  `}
`

AnimatedContainer.baseDelay = 0.5

export default AnimatedContainer
