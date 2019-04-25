import React from "react"
import AnimatedContainer from "../components/containers/AnimatedContainer"
import Content from "../components/Content"
import Apps from "../components/home/Apps"
import Experience from "../components/home/Experience"
import Teaching from "../components/home/Teaching"

const Home = () => (
	<>
		<Content>
			<AnimatedContainer delay={AnimatedContainer.baseDelay}>
				<Apps />
			</AnimatedContainer>
			<AnimatedContainer delay={AnimatedContainer.baseDelay + 0.25}>
				<Experience />
			</AnimatedContainer>
			<AnimatedContainer delay={AnimatedContainer.baseDelay + 0.5}>
				<Teaching />
			</AnimatedContainer>
		</Content>
		<AnimatedContainer delay={AnimatedContainer.baseDelay + 0.75}>
			<div className="centered side-padded">
				Please check out the other sections of our site, <br />
				or <a href="mailto:contact@runtimesharks.com">get in touch</a>; we'd
				love to talk.
			</div>
		</AnimatedContainer>
	</>
)

export default Home
