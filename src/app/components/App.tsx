import React from "react"
import { Route, Switch } from "react-router-dom"

interface Props {
	ssrLocation?: string
}

const App = ({ ssrLocation: string }: Props) => (
	<Switch>
		<Route exact path="/" render={() => <div>It works</div>} />
	</Switch>
)

export default App
