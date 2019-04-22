import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home"

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" render={Home} />
		</Switch>
	)
}

export default Router
