import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../AnimatedContainer"

const BodyTracking = (props: any) => (
	<Project {...props} centered>
		<AnimatedContainer>
			Track what you eat, but also how and when. Are you into intermittent
			fasting? Track that as well — with a customisable period, ranging from 14
			to 20 hours — and get notified when your fast ends. See at a glance how
			much time has elapsed and at what hour it ends.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={2}>
			Color code your meals and food, then extract patterns from your history
			log. Have you been eating too much lately? Too often? Too much sugar? Not
			enough vegetables? The best part is that colors can mean literally
			anything you want, they don't have to mean good/bad; choose whatever works
			best for you.
		</AnimatedContainer>
		<br />
		<AnimatedContainer position={3}>
			Syncs weight data with Apple Health, so you can also correlate your eating
			habits with your weight evolution. You can also track your stools, so you
			can correlate your eating habits with your bowel movements. You might find
			out what foods are causing you troubles.
		</AnimatedContainer>
	</Project>
)

export default BodyTracking
