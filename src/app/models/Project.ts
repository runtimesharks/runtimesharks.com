import Theme from "../theme/Theme"
import ExternalLink from "./ExternalLink"
import Gallery from "./Gallery"

interface Schema {
	name: string
	externalLinks?: ExternalLink[]
	paddleProductId?: string
	link?: string
	color?: string
	gallery?: Gallery
}

export default class Project {
	name: string
	externalLinks: ExternalLink[]
	paddleProductId?: string
	link: string
	image: string
	gallery: Gallery
	slug: string
	color: string

	constructor({
		name,
		externalLinks = [],
		paddleProductId,
		link,
		color = Theme.linkColor,
		gallery = [],
	}: Schema) {
		this.name = name
		this.externalLinks = externalLinks
		this.paddleProductId = paddleProductId
		this.slug = name
			.toLowerCase()
			.replace(/[& ,!']/g, "-")
			.replace("--", "-")

		if (this.slug.endsWith("-")) {
			this.slug = this.slug.slice(0, -1)
		}

		this.link = link || `/projects/${this.slug}`
		this.image = `/images/projects/screenshots/${this.slug}.png`
		this.color = color
		this.gallery = gallery
	}
}
