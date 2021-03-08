import React from "react"
import styled from "styled-components"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../AnimatedContainer"

const DNDMe = (props: any) => (
	<StyledProject {...props}>
		<AnimatedContainer>
			• Ever wanted to get more focused work done?
			<br />
			• Do you turn Do Not Disturb on, but forget to turn it off?
			<br />• Is the built-in 1-hour timer not enough?
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={2}>
			Look no further!
			<br />
			<br />
			Activate Do Not Disturb for a few hours and work{" "}
			<strong>distraction free!</strong> <br />
		</AnimatedContainer>
		<AnimatedContainer position={3}>
			<br />
			<Disclaimer>
				<br />• Due to system limitations on Big Sur (v2.0.0+), if a schedule is
				active, during those hours DND Me can not perform any actions, but it
				will update according to external changes.
				<br />• Due to system limitations on Sierra–Catalina (v1.1.3), DND Me
				does not work if Do Not Disturb is scheduled in System Preferences -&gt;
				Notifications. You can download v1.1.3 for Sierra–Catalina{" "}
				<a href="https://dl.devmate.com/com.runtimesharks.dndme/837/1611389306/DNDMe-837.dmg">
					here
				</a>
				.
			</Disclaimer>
			<a
				href="https://www.producthunt.com/posts/dnd-me-2-0?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dnd-me-2-0"
				target="_blank"
			>
				<Img
					src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=287274&theme=dark"
					alt="DND Me 2.0 - Turn DND on for a few hours and work distraction free | Product Hunt"
				/>
			</a>
		</AnimatedContainer>
	</StyledProject>
)

const StyledProject = styled(Project)`
	img {
		max-width: 400px;
		max-height: 400px;
	}
`

const Disclaimer = styled.p`
	font-size: 0.8em;
	color: #bbb;
	font-style: italic;
	text-align: left;
`

const Img = styled.img`
	width: 250px;
	height: 54px;
	margin: auto;
	margin-top: 32px;
`

export default DNDMe
