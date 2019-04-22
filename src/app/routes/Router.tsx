import React from "react"
import { Route, Switch } from "react-router-dom"
import Consulting from "../pages/Consulting"
import Home from "../pages/Home"
import Mentoring from "../pages/Mentoring"
import Project from "../pages/Project"
import Projects from "../pages/Projects"
import PrivacyPolicy from "../pages/PrivacyPolicy";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/projects" component={Projects} />
			<Route path="/projects/:project" component={Project} />
			<Route path="/privacy/:project" component={PrivacyPolicy} />
			<Route exact path="/mentoring" component={Mentoring} />
			<Route exact path="/consulting" component={Consulting} />
		</Switch>
	)
}

export default Router
