import React, { useEffect, useState } from "react"
import Router from "../routes/router"
import { GlobalStyle } from "../theme/globalStyle"
import Helmet from "../utils/Helmet"
import InitialAnimationContext from "../utils/InitialAnimationContext"
import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"

interface Props {
	ssrLocation?: string
}

const App = ({ ssrLocation }: Props) => {
	const [didAnimate, setDidAnimate] = useState(false)

	useEffect(() => {
		// @ts-ignore
		Paddle.Setup({ vendor: 39394 })
		setTimeout(() => setDidAnimate(true), 1100)
	}, [])

	return (
		<>
			<Helmet ssrLocation={ssrLocation} />
			<GlobalStyle />
			<Header />
			<Navigation />
			<InitialAnimationContext.Provider value={didAnimate}>
				<Router />
			</InitialAnimationContext.Provider>
			<Footer />
		</>
	)
}

export default App
