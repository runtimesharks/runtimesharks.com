import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./app/components/App"
import initGA from "./app/utils/GoogleAnalytics"

initGA()

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate

renderMethod(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
)

if (module.hot) {
	module.hot.accept()
}
