import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Project from "../../models/Project"
import Theme from "../../theme/Theme"

interface StyleProps {
	count: number
}

const AppStoreButton = ({ url }: { url: string }) => {
	const [w, setW] = useState<Window | undefined>(undefined)
	useEffect(() => setW(window), [w])

	return (
		<StoreButton
			href={url}
			style={{
				display: "inline-block",
				overflow: "hidden",
				borderRadius: "13px",
			}}
		>
			<img
				src={`https://tools.applemediaservices.com/api/badges/download-on-the-app-store/${
					w !== undefined &&
					w.matchMedia("(prefers-color-scheme: dark)").matches
						? "black"
						: "white"
				}/${
					w === undefined
						? "en-US"
						: w.navigator.languages !== undefined
						? w.navigator.languages[0]
						: window.navigator.language || "en-US"
				}?size=250x83&amp;releaseDate=1602633600&h=b13930c804b667ec6d53650b70216434`}
				alt="Download on the App Store"
				style={{ borderRadius: "13px", width: "250px", height: "83px" }}
			/>
		</StoreButton>
	)
}

const GooglePlayButton = ({ url }: { url: string }) => {
	const [w, setW] = useState<Window | undefined>(undefined)
	useEffect(() => setW(window), [w])

	return (
		<StoreButton
			href={url}
			style={{
				display: "inline-block",
				borderBottom: "none",
			}}
		>
			<img
				src={`https://play.google.com/intl/${
					w === undefined
						? "en-US"
						: w.navigator.languages !== undefined
						? w.navigator.languages[0]
						: window.navigator.language || "en-US"
				}/badges/static/images/badges/en_badge_web_generic.png`}
				alt="Get it on Google Play"
			/>
		</StoreButton>
	)
}

const ExternalButtons = ({
	externalLinks,
	paddleProductId,
	price,
}: Project) => (
	<Container count={externalLinks.length + (paddleProductId == null ? 0 : 1)}>
		{externalLinks.map((l) => {
			if (l.title === "App Store") {
				return <AppStoreButton url={l.url} />
			}

			if (l.title === "Google Play") {
				return <GooglePlayButton url={l.url} />
			}

			return (
				<Button key={l.url} href={l.url}>
					{l.title}
				</Button>
			)
		})}
		{paddleProductId == null ? null : (
			<PaddleButton
				onClick={(e) => {
					e.preventDefault()
					// @ts-ignore
					Paddle.Checkout.open({ product: paddleProductId })
				}}
			>
				Buy Now for {price}!
			</PaddleButton>
		)}
	</Container>
)

const Container = styled.div<StyleProps>`
	margin-top: 3em;
	display: grid;
	grid-template-columns: repeat(${(props: StyleProps) => props.count}, auto);
	justify-content: center;
`

const StoreButton = styled.a`
	border-bottom: none;

	@media (hover: hover) {
		&:hover {
			border-bottom: none;
		}
	}
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
	height: 26px;

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
