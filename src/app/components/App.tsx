import React, { useEffect } from "react"
import Router from "../routes/Router"
import { GlobalStyle } from "../theme/globalStyle"
import LocationContext from "../utils/LocationContext"
import Footer from "./Footer"
import Header from "./Header"

interface Props {
	ssrLocation?: string
}

const App = ({ ssrLocation }: Props) => {
	useEffect(() => {
		// @ts-ignore
		Paddle.Setup({ vendor: 39394 })
	}, [])

	return (
		<React.StrictMode>
			<GlobalStyle />
			<Header />
			<LocationContext.Provider value={ssrLocation}>
				<Router />
			</LocationContext.Provider>
			<Footer />
		</React.StrictMode>
	)
}

export default App
