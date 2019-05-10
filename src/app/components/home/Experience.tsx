import React from "react"
import styled from "styled-components"
import Nodejs from "./icons/Nodejs"
import Reactjs from "./icons/Reactjs"
import Swift from "./icons/Swift"

const Experience = () => (
	<>
		<h2>We have experience with</h2>
		<Container>
			<Technologies>
				<Technology>
					<TechnologyContainer>
						<Swift />
						<Reactjs fill="#F77662" />
					</TechnologyContainer>
					<span className="technology-caption">iOS, Android & Mac</span>
				</Technology>
				<Technology>
					<TechnologyContainer>
						<Nodejs />
						<Reactjs />
					</TechnologyContainer>
					<Caption>Web</Caption>
				</Technology>
			</Technologies>
		</Container>
	</>
)

const Container = styled.div`
	display: grid;

	@media screen and (max-width: 630px) {
		padding-top: 3em;
	}
`

const Technologies = styled.div`
	display: inline-grid;
	grid-template-columns: auto auto;
	grid-gap: 120px;
	margin: 40px auto;

	@media screen and (max-width: 500px) {
		grid-gap: 80px;
	}

	@media screen and (max-width: 400px) {
		grid-gap: 40px;
	}

	@media screen and (max-width: 310px) {
		grid-template-columns: auto;
	}
`

const TechnologyContainer = styled.div`
	display: inline-grid;
	grid-template-columns: auto auto;
	grid-column-gap: 20px;
	align-items: center;

	@media screen and (max-width: 400px) {
		grid-gap: 0;
	}

	@media screen and (max-width: 310px) {
		grid-gap: 20px;
	}
`

const Technology = styled.div`
	display: grid;
	grid-row-gap: 5px;
	justify-items: center;
`

const Caption = styled.span`
	text-align: center;
`

export default Experience
