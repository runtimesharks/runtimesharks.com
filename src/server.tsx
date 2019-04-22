import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import Helmet from "react-helmet"
import { StaticRouter } from "react-router-dom"
import { ServerStyleSheet } from "styled-components"
import App from "./app/components/App"

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

server
	.disable("x-powered-by")
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
	.get("/*", async (req, res) => {
		const context: any = {}
		const location = `https://${req.hostname}${req.originalUrl}`
		const sheet = new ServerStyleSheet()
		const markup = renderToString(
			sheet.collectStyles(
				<StaticRouter context={context} location={req.originalUrl}>
					<App ssrLocation={location /* For meta tags*/} />
				</StaticRouter>
			)
		)
		const styleTags = sheet.getStyleTags()
		const helmet = Helmet.renderStatic()
		const allHelmetDataAsString = Object.keys(helmet)
			.map((key) => helmet[key].toString())
			.filter((o) => o !== "" && o !== undefined)
			.join("\n")

		if (context.url) {
			res.redirect(context.url)
		} else {
			const faviconPath = "/images/favicons"
			res.status(200).send(`
<!doctype html>
<html lang="">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Runtime Sharks</title>
		<link rel="shortcut icon" href="/favicon.ico" />
		<link rel="icon" type="image/x-icon" sizes="16x16 32x32" href="favicon.ico">
		<link rel="icon" href="${faviconPath}/favicon-32.png" sizes="32x32">

		<link rel="apple-touch-icon" sizes="180x180" href="${faviconPath}/favicon-180-precomposed.png">
		<link rel="apple-touch-icon" sizes="152x152" href="${faviconPath}/favicon-152-precomposed.png">
		<link rel="apple-touch-icon" sizes="144x144" href="${faviconPath}/favicon-144-precomposed.png">
		<link rel="apple-touch-icon" sizes="120x120" href="${faviconPath}/favicon-120-precomposed.png">
		<link rel="apple-touch-icon" sizes="114x114" href="${faviconPath}/favicon-114-precomposed.png">
		<link rel="apple-touch-icon" sizes="72x72" href="${faviconPath}/favicon-72-precomposed.png">
		<link rel="apple-touch-icon" href="${faviconPath}/favicon-57.png">

		<link rel="manifest" href="/images/favicons/manifest.json">
		<link rel="icon" sizes="192x192" href="${faviconPath}/favicon-192.png">

		<meta name="msapplication-TileColor" content="#FFFFFF">
		<meta name="msapplication-TileImage" content="favicon-144.png">
		<meta name="theme-color" content="#ffffff">

		<script src="https://cdn.paddle.com/paddle/paddle.js"></script>

		${allHelmetDataAsString}
		${styleTags}
		${
			assets.client.css
				? `<link rel="stylesheet" href="${assets.client.css}">`
				: ""
		}
		${
			process.env.IS_PROD
				? `<script src="${assets.client.js}" defer></script>`
				: `<script src="${assets.client.js}" defer crossorigin></script>`
		}
	</head>
	<body>
		<div id="root">${markup}</div>
	</body>
</html>`)
		}
	})

export default server
