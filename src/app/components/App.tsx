import React from "react"
import { Route, Switch } from "react-router-dom"

const App = () => (
	<Switch>
		<Route exact path="/" render={() => <div>It works</div>} />
	</Switch>
)

export default App
