import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../containers/AnimatedContainer"

const TravelStories = (props: any) => (
	<Project {...props}>
		<AnimatedContainer>
			In 2018 we set out to create a platform to help people journal and share
			travels better. Why bother with such a crowded market? Because we believe
			that when you write down your thoughts in a journal, you write in a
			certain way; you write for yourself; you write for your future self; you
			write with empathy; you create memories, not simple reviews.
		</AnimatedContainer>
		<AnimatedContainer position={2}>
			We really think it’s much more rewarding to read a story, not a simple
			review; to experience a memory, not read a simple description about a
			place; to feel another person’s feelings about a photo. And My Travel
			Stories offers just that: a way to search places and/or follow others to
			be up-to-date with their entries. You’ll get a glimpse of other people’s
			lives, as they want it to be remembered by themselves.
		</AnimatedContainer>
		<AnimatedContainer position={3}>
			The backend and website were created with <a href="https://vapor.codes">Vapor</a>, a server side framework based on Swift.
		</AnimatedContainer>
	</Project>
)

export default TravelStories
