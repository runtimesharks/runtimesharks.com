import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../containers/AnimatedContainer"

const IdeaTrackerr = (props: any) => {
	return (
		<Project {...props}>
			<AnimatedContainer>
				Ever wanted to <em>quickly</em> jot down ideas, but also keep track of
				their progress? Does a notes app or a journal become too{" "}
				<em>cluttered</em>?
			</AnimatedContainer>
			<br />
			<AnimatedContainer position={2}>
				Are you forgetting in what state each idea is? If it's worth it, what
				research have you done, or if and why you cancelled it?
			</AnimatedContainer>
			<br />
			<AnimatedContainer position={3}>
				Say hello to Idea Trackerr. The app to <strong>easily</strong> keep
				track of your ideas, where you can give a status to each one and keep a
				history of <em>everything</em> related to it.
			</AnimatedContainer>
			<br />
			<AnimatedContainer position={4}>
				Don't lose track of your ideas <strong>any longer</strong>!
			</AnimatedContainer>
		</Project>
	)
}

export default IdeaTrackerr
