import React, { useContext } from "react"
import { RouteComponentProps, withRouter } from "react-router"
import styled, { css, keyframes } from "styled-components"
import InitialAnimationContext from "../utils/InitialAnimationContext"

interface StyleProps {
	shouldAnimate: boolean
	delay: number
}

interface Props {
	delay?: number
	position?: number
	disableAnimations?: boolean
	sidepaded?: boolean
	children?: any
}

function AnimatedContainer({
	delay = AnimatedContainer.baseDelay,
	position = 1,
	disableAnimations = false,
	sidepaded = true,
	children,
	history,
}: Props & RouteComponentProps) {
	const didAnimate = useContext(InitialAnimationContext)
	const isPop = history.action === "POP"
	// On `PUSH`, `didAnimate` will be `true` -> not first render.
	// On `POP` [back | forward button], `didAnimate` will be `true` -> not first render.
	// On `POP` first render, `didAnimate` will be `false` -> first render.
	const isFirstRender = didAnimate === false || isPop === false
	const shouldAnimate = disableAnimations === false && isFirstRender

	console.log(history.action)

	return (
		<Container
			className={`${sidepaded ? "side-padded" : null}`}
			shouldAnimate={shouldAnimate}
			delay={position * delay}
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
		props.shouldAnimate
			? css`
					opacity: 0;
					animation: ${appearFromBelow} 0.75s ${props.delay}s forwards
						ease-in-out;
			  `
			: null}
`

AnimatedContainer.baseDelay = 0.25

export default withRouter(AnimatedContainer)
