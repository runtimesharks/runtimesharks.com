import { createGlobalStyle } from "styled-components"
import Theme from "./Theme"

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,600');

	/* Reset */
	/* Box sizing rules */
	*,
	*::before,
	*::after {
		border: none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* Remove default padding */
	ul[class],
	ol[class] {
		padding: 0;
	}

	/* Remove default margin */
	body,
	h1, h2, h3, h4, h5, h6, p,
	ul, ol, li,
	figure, figcaption,
	blockquote, dl, dd {
		margin: 0;
		border: 0;
		color: inherit;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		-webkit-font-smoothing: antialiased;
	}

	/* Revert the header sizes */
	h1, h2, h3, h4, h5, h6 {
		font-size: revert;
		line-height: initial;
	}

	/* Set core body defaults */
	body {
		min-height: 100vh;
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
	}

	/* Remove list styles on ul, ol elements with a class attribute */
	ul[class],
	ol[class] {
		list-style: none;
	}

	/* A elements that don't have a class get default styles */
	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	/* Make images easier to work with */
	img {
		max-width: 100%;
		display: block;
	}

	/* Natural flow and rhythm in articles by default */
	article > * + * {
		margin-top: 1em;
	}

	/* Inherit fonts and colors for inputs and buttons */
	input, button, textarea, select {
		color: inherit;
		font-family: inherit;
		font-size: inherit;
	}

	/* Remove _all_ animations and transitions for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		* {
			animation-play-state: paused !important;
			transition: none !important;
			scroll-behavior: auto !important;
		}
	}

	/* Global stuff */
	body {
		color: ${Theme.textColor};
		background: ${Theme.backgroundColor};
		font-family: ${Theme.bodyFont};
		font-size: 1.1em;
		line-height: 1.35em;

		margin: 0 auto;

		@media (prefers-color-scheme: dark) {
			background: ${Theme.darkBackgroundColor};
			color: white;
		}
	}

	code {
		font-size: 0.8em;
		font-family: 'SF Mono', Menlo, Monaco, Courier, monospace;
	}

	#primary {
		fill: ${`${Theme.homeTextColor}50`};
	}

	#secondary {
		fill: ${Theme.homeTextColor};
	}

	button {
		background-color: transparent;
		cursor: pointer;

		:focus {
			outline: none;
		}
	}

	li {
		list-style: disc inside;

		> ul > li {
			padding-left: 1.5em;
			list-style-type: circle;
		}
	}

	header {
		font-family: ${Theme.headerFont};
	}

	h1, h2 {
		font-size: 1.3em;
		font-weight: 600;
		margin-bottom: 10px;
	}

	a {
		text-decoration: none;
		color: ${Theme.linkColor};

		${Theme.dottedBottomBorder()};
	}

	p {
		margin: revert;

		&.no-margin {
			margin: 0;
		}
	}

	em {
		font-style: italic;
	}

	strong {
		font-weight: 700;
	}

	.centered {
		text-align: center;
	}

	.side-padded {
		padding-left: ${Theme.sidePadding};
		padding-right: ${Theme.sidePadding};
	}
`
