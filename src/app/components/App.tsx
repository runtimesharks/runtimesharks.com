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

		document.addEventListener("scroll", () => {
			const passedFixedTreshold = window.scrollY > 103
			const navPadding = document.getElementsByClassName("nav-padding")[0]
			const nav = document.getElementsByClassName("navigation")[0]

			if (passedFixedTreshold) {
				if (!navPadding.classList.contains("visible")) {
					navPadding.classList.add("visible")
				}
				if (!nav.classList.contains("fixed")) {
					nav.classList.add("fixed")
				}
			} else if (!passedFixedTreshold) {
				if (navPadding.classList.contains("visible")) {
					navPadding.classList.remove("visible")
				}
				if (nav.classList.contains("fixed")) {
					nav.classList.remove("fixed")
				}
			}
		})
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
