import React from "react"
import AnimatedContainer from "./AnimatedContainer"

const ProjectContainer = ({ children }: any) => (
	<AnimatedContainer delay={AnimatedContainer.baseDelay}>
		{children}
	</AnimatedContainer>
)

export default ProjectContainer
