import React, { useEffect } from "react"
import Router from "../routes/router"
import { GlobalStyle } from "../theme/globalStyle"
import Helmet from "../utils/Helmet"
import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"

interface Props {
	ssrLocation?: string
}

const App = ({ ssrLocation }: Props) => {
	useEffect(() => {
		// @ts-ignore
		Paddle.Setup({ vendor: 39394 })
	}, [])

	return (
		<>
			<Helmet ssrLocation={ssrLocation} />
			<GlobalStyle />
			<Header />
			<Navigation />
			<Router />
			<Footer />
		</>
	)
}

export default App
