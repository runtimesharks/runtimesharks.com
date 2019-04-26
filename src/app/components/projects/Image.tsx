import React from "react"
import styled from "styled-components"
import ExternalLink from "../../models/ExternalLink"

const Image = ({ image, ...rest }: any) => (
	<Container {...rest}>
		{(rest.externalLinks as ExternalLink[]).length >= 1 ? (
			<a href={rest.externalLinks[0].url}>
				<Img src={image} />
			</a>
		) : (
			<Img src={image} />
		)}
	</Container>
)

const Container = styled.div`
	a,
	a:hover {
		border-bottom: none;
	}
`

const Img = styled.img`
	max-height: 500px;
	max-width: 500px;

	@media screen and (max-width: 450px) {
		max-width: 90%;
	}
`

export default Image
