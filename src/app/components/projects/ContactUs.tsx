import React from "react"
import styled from "styled-components"

const ContactUs = () => (
	<Container className="centered">
		We're focused on mobile applications, but we also love building web apps;{" "}
		<Spacer />
		if you'd like to get in touch, you can reach us at{" "}
		<a href="mailto:contact@runtimesharks.com">
			contact@runtimesharks.com
		</a>. <Spacer />
		Please find below some of our projects and past work.
	</Container>
)

const Container = styled.div`
	max-width: 700px;
	margin: auto;
`

const Spacer = styled.br`
	@media screen and (max-width: 630px) {
		display: none;
	}
`

export default ContactUs
