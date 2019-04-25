import React from "react"
import styled from "styled-components"
import Project from "../../models/Project"

const Gallery = ({ gallery }: Project) => (
	<Container>
		{gallery.map((image) => {
			return (
				<Item key={image.url}>
					<Img src={image.url} />
					<Caption>{image.caption}</Caption>
				</Item>
			)
		})}
	</Container>
)

const Container = styled.div`
	display: grid;
	max-width: 730px;
	grid-template-columns: auto auto;
	grid-column-gap: 80px;
	margin: 100px auto 0;

	@media screen and (max-width: 820px) {
		grid-column-gap: 40px;
	}

	@media screen and (max-width: 760px) {
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		grid-row-gap: 80px;
	}
`

const Item = styled.div``

const Img = styled.img`
	display: block;
	max-height: 400px;
	max-width: 400px;
	margin: auto;
`

const Caption = styled.div`
	text-align: center;
	color: #666;
	font-size: 0.7em;
	margin-top: 4px;
`

export default Gallery
