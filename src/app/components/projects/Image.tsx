import React from "react"
import styled from "styled-components"

const Image = ({ image, ...rest }: any) => {
	return (
		<Container {...rest}>
			<Img src={image} />
		</Container>
	)
}

const Container = styled.div``

const Img = styled.img`
	max-height: 500px;
	max-width: 500px;

	@media screen and (max-width: 450px) {
		max-width: 90%;
	}
`

export default Image
