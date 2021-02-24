import React from "react"
import styled from "styled-components"
import Project from "../../models/Project"

const Gallery = ({ gallery }: Project) => (
	<Container>
		<Grid>
			{gallery.map((image) => {
				return (
					<Item key={image.url}>
						<Img src={image.url} />
						<Caption>{image.caption}</Caption>
					</Item>
				)
			})}
		</Grid>
	</Container>
)

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-column-gap: 40px;
	grid-row-gap: 16px;
	margin-top: 80px;

	@media screen and (max-width: 900px) {
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

	@media screen and (max-width: 1300px) {
		max-height: 550px !important;
		max-width: 550px !important;
	}

	@media screen and (max-width: 1200px) {
		max-height: 500px !important;
		max-width: 500px !important;
	}

	@media screen and (max-width: 1100px) {
		max-height: 450px !important;
		max-width: 450px !important;
	}

	@media screen and (max-width: 1000px) {
		max-height: 400px !important;
		max-width: 400px !important;
	}

	@media screen and (max-width: 900px) {
		max-height: 100% !important;
		max-width: 100% !important;
	}
`

const Caption = styled.div`
	text-align: center;
	color: #666;
	font-size: 0.85em;
	margin-top: 4px;
`

export default Gallery
