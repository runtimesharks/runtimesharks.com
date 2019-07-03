import React, { useContext } from "react"
import { RouteComponentProps, withRouter } from "react-router"
import styled, { css, keyframes } from "styled-components"
import InitialAnimationContext from "../utils/InitialAnimationContext"

interface StyleProps {
	shouldAnimate: boolean
	delay: number
	forced: boolean
}

interface Props {
	delay?: number
	position?: number
	forced?: boolean
	sidepaded?: boolean
	children?: any
}

function AnimatedContainer({
	delay = AnimatedContainer.baseDelay,
	position = 1,
	forced = true,
	sidepaded = true,
	children,
	history,
}: Props & RouteComponentProps) {
	const didAnimate = useContext(InitialAnimationContext)
	// Disable animating when going back.
	const isPop = history.action === "POP"
	const shouldAnimate = didAnimate === false || isPop === false

	return (
		<Container
			className={`${sidepaded ? "side-padded" : null}`}
			shouldAnimate={shouldAnimate && didAnimate === false}
			delay={position * delay}
			forced={shouldAnimate && forced}
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
		props.shouldAnimate === false && props.forced === false
			? null
			: css`
					opacity: 0;
					animation: ${appearFromBelow} 0.75s ${props.delay}s forwards
						ease-in-out;
			  `}
`

AnimatedContainer.baseDelay = 0.25

export default withRouter(AnimatedContainer)
