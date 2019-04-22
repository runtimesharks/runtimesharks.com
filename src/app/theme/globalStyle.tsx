import { createGlobalStyle } from "styled-components"
import Theme from "./Theme"

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700,900');

	/* Reset */
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video, button, input {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		-webkit-font-smoothing: antialiased;
	}

	div {
		display: block;
	}

	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}

	body, div, p {
		line-height: 1.35em;
	}

	h1, h2, h3, h4, h5, h6 {
		line-height: 1em;
	}

	ol, ul, li {
		list-style: none;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	/* Global stuff */
	body {
		color: ${Theme.textColor};
		background: ${Theme.backgroundColor};
		font-family: ${Theme.bodyFont};
		font-size: 1.1em;
		line-height: 1.75em;

		margin: 0 auto;

		${
			"" /* @media (prefers-color-scheme: dark) {
			background: ${Theme.textColor};
			color: white;
		} */
		}
	}

	code {
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

	h1 {
		font-size: 1.3em;
		font-weight: 600;
		margin-bottom: 10px;
	}

	a {
		text-decoration: none;
		color: ${Theme.textColor};

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
		padding: 0 ${Theme.sidePadding};
	}
`
