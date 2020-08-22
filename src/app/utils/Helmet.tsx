import React, { useContext } from "react"
import { Helmet as ReactHelmet } from "react-helmet"
import LocationContext from "./LocationContext"

interface Props {
	title: string
	description: string
	image: string
}

const Helmet = ({ title, description, image }: Props) => {
	let location = useContext(LocationContext)

	// We use the `window`'s location when rendering on the client.
	// Used when we need the full URL, like canonical or OG tags.
	if (location == null) {
		location = window.location.href
	}

	return (
		<ReactHelmet>
			<title>{title}</title>
			<link rel="canonical" href={location} />
			<link
				rel="style"
				href="https://fonts.googleapis.com/css?family=Titillium+Web:400,600"
			/>
			{/* Metadata */}
			<meta name="description" content={description} />
			{/* OG */}
			<meta property="og:title" content={title} />
			<meta property="og:image" content={image} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={location} />
			<meta property="og:site_name" content={title} />
			<meta property="og:type" content="website" />
		</ReactHelmet>
	)
}

Helmet.defaultProps = {
	title: "Runtime Sharks",
	description:
		"Runtime Sharks is a software development company, mainly focused on iOS",
	image: "https://runtimesharks.com/images/favicons/192x192.png",
}

export default Helmet
