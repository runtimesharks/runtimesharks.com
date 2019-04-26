import React from "react"
import styled from "styled-components"
import Project from "../../models/Project"
import Theme from "../../theme/Theme"

interface StyleProps {
	count: number
}

const ExternalButtons = ({ externalLinks, paddleProductId }: Project) => (
	<Container
		count={externalLinks.length + (paddleProductId === undefined ? 0 : 1)}
	>
		{externalLinks.map((l) => {
			return (
				<Button key={l.url} href={l.url}>
					{l.title}
				</Button>
			)
		})}
		{paddleProductId !== undefined ? (
			<PaddleButton
				onClick={(e) => {
					e.preventDefault()
					// @ts-ignore
					Paddle.Checkout.open({ product: paddleProductId })
				}}
			>
				Buy Now!
			</PaddleButton>
		) : (
			""
		)}
	</Container>
)

const Container = styled.div<StyleProps>`
	margin-top: 3em;
	display: grid;
	grid-template-columns: repeat(${(props: StyleProps) => props.count}, auto);
	justify-content: center;
`

const Button = styled.a`
	background: linear-gradient(${Theme.linkColor} 0%, ${Theme.darkBlue} 100%);
	font-family: "Helvetica Neue", Helvetica, Arial, "lucida grande", tahoma,
		verdana, arial, sans-serif;
	text-decoration: none;
	text-align: center;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.18);
	border-radius: 2px;
	color: #ffffff;
	padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 9px;
	padding-right: 9px;
	box-sizing: content-box;

	border: 1px solid;
	border-color: #494949 #303030 #1d1d1d;

	&:hover {
		border-color: #494949 #303030 #1d1d1d;
	}

	font-weight: bold;
	font-size: 13px;
	text-shadow: 0px 1px 0px #414141;
	display: inline-block;
	outline: none;
	margin: 0 5px;
	cursor: pointer;
`

const PaddleButton = styled(Button)`
	background: linear-gradient(#74c937 0%, #3b8109 100%);
	border-color: #60a62e #519f18 #409701;

	&:hover {
		border-color: #60a62e #519f18 #409701;
	}
`

export default ExternalButtons
