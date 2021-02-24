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
	max-width: 900px;
	grid-template-columns: auto auto;
	grid-column-gap: 40px;
	grid-row-gap: 16px;
	margin-top: 80px;
	margin-left: 60px;

	@media screen and (max-width: 760px) {
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		grid-row-gap: 40px;
	}
`

const Item = styled.div``

const Img = styled.img`
	display: block;
	max-height: 600px !important;
	max-width: 600px !important;
	margin: auto;
`

const Caption = styled.div`
	text-align: center;
	color: #666;
	font-size: 0.85em;
	margin-top: 4px;
`

export default Gallery
