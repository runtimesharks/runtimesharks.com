import React from "react"
import styled from "styled-components"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../containers/AnimatedContainer"

const TimeProgress = (props: any) => (
	<StyledProject {...props}>
		<AnimatedContainer>
			See at a glance what percentage of the current year, quarter, month, week
			or day has passed (or is remaining) and never get caught off-guard again.
		</AnimatedContainer>
	</StyledProject>
)

const StyledProject = styled(Project)`
	img {
		max-width: 400px;
		max-height: 400px;
	}
`

export default TimeProgress
