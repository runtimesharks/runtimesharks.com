import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom"

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
			<Switch>
				<Route exact path="/" render={() => <div>It works</div>} />
			</Switch>
		</>
	)
}

export default App
