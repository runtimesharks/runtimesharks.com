import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../AnimatedContainer"

const MyTherme = (props: any) => (
	<Project {...props} centered>
		<AnimatedContainer>
			Roland served as Head of Digital for{" "}
			<a href="https://therme.media" title="Therme Media">
				Therme Media
			</a>
			,{" "}
			<a href="https://thermegroup.com" title="Therme Group">
				Therme Group
			</a>
			's digital agency, coordinating the creation of the mobile app from
			scratch.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={1}>
			On the iOS side, he was responsible for the architecture, and
			implementation of the app. It was build fully with SwiftUI, fully custom,
			including the navigation (both the UI part and the state management).
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={2}>
			Among other features, users can buy tickets, check the schedule and ticket
			prices for all configurations, check the occupancy of each zone, take part
			in the loyalty program, run various challenges to receive rewards, have
			real-time access to their current visit, receive notifications and much
			more.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={3}>
			At the moment of writing, the app is available in 2 languages and has been
			used by over 15.000 users.
		</AnimatedContainer>
	</Project>
)

export default MyTherme
