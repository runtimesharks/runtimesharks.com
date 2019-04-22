import React from "react"
import { Route, Switch } from "react-router-dom"
import Consulting from "../pages/Consulting"
import Home from "../pages/Home"
import Mentoring from "../pages/Mentoring"
import Projects from "../pages/Projects"

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" render={Home} />
			<Route exact path="/projects" render={Projects} />
			<Route exact path="/mentoring" render={Mentoring} />
			<Route exact path="/consulting" render={Consulting} />
		</Switch>
	)
}

export default Router
