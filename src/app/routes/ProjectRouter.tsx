import React from "react"
import { Redirect, Route, Switch } from "react-router"
import BerariaH from "../components/projects/descriptions.tsx/BerariaH"
import CardVirtual from "../components/projects/descriptions.tsx/CardVirtual"
import Carminder from "../components/projects/descriptions.tsx/Carminder"
import ChallengeBeat from "../components/projects/descriptions.tsx/ChallengeBeat"
import DeinDeal from "../components/projects/descriptions.tsx/DeinDeal"
import DNDMe from "../components/projects/descriptions.tsx/DNDMe"
import Essenza from "../components/projects/descriptions.tsx/Essenza"
import ExpensesPlanner from "../components/projects/descriptions.tsx/ExpensesPlanner"
import Goalee from "../components/projects/descriptions.tsx/Goalee"
import HBW from "../components/projects/descriptions.tsx/HBW"
import IdeaTrackerr from "../components/projects/descriptions.tsx/IdeaTrackerr"
import MyTravelStories from "../components/projects/descriptions.tsx/MyTravelStories"
import PuppetAnthems from "../components/projects/descriptions.tsx/PuppetAnthems"
import Projects from "../pages/Projects"

const ProjectRouter = () => (
	<Switch>
		<Route exact path="/projects" component={Projects} />
		<Route exact path="/projects/challengebeat" component={ChallengeBeat} />
		<Route
			exact
			path="/projects/my-travel-stories"
			component={MyTravelStories}
		/>
		<Route exact path="/projects/hey-be-well" component={HBW} />
		<Route exact path="/projects/beraria-h" component={BerariaH} />
		<Route exact path="/projects/idea-trackerr" component={IdeaTrackerr} />
		<Route exact path="/projects/dnd-me" component={DNDMe} />
		<Route exact path="/projects/goalee" component={Goalee} />
		<Route exact path="/projects/card-virtual" component={CardVirtual} />
		<Route exact path="/projects/essenza" component={Essenza} />
		<Route exact path="/projects/deindeal" component={DeinDeal} />
		<Route exact path="/projects/puppet-anthems" component={PuppetAnthems} />
		<Route
			exact
			path="/projects/expenses-planner"
			component={ExpensesPlanner}
		/>
		<Route exact path="/projects/carminder" component={Carminder} />
		<Route>
			<Redirect to="/projects" />
		</Route>
	</Switch>
)

export default ProjectRouter
