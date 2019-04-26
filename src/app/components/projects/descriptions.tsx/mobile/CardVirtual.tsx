import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../containers/AnimatedContainer"

const CardVirtual = (props: any) => (
	<Project {...props}>
		<AnimatedContainer>
			Helps users save their fidelity cards (or request new ones), that also
			displays merchants & their offers and offers a shopping list.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={2}>
			With the built-in friends feature, the users can share and collaborate in
			real-time on their shopping lists.
		</AnimatedContainer>
	</Project>
)

export default CardVirtual
