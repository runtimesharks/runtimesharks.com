import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./app/components/App"

hydrate(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
)

// @ts-ignore
if (module.hot) {
	// @ts-ignore
	module.hot.accept()
}
