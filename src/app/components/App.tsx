import React, { useEffect } from "react"
import Router from "../routes/router"
import Helmet from "../utils/Helmet"

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
			<Router />
		</>
	)
}

export default App
