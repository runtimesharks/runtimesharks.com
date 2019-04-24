import Theme from "../theme/Theme"
import ExternalLink from "./ExternalLink"

interface Schema {
	name: string
	description?: string
	externalLinks?: ExternalLink[]
	paddleProductId?: string
	link?: string
	color?: string
}

export default class Project {
	name: string
	description: string
	externalLinks: ExternalLink[]
	paddleProductId?: string
	link?: string
	image: string
	slug: string
	color: string

	constructor({
		name,
		description = "def",
		externalLinks = [],
		paddleProductId,
		link,
		color = Theme.linkColor,
	}: Schema) {
		this.name = name
		this.description = description
		this.externalLinks = externalLinks
		this.paddleProductId = paddleProductId
		this.slug = name.toLowerCase().replace(/[& ]/g, "-")
		this.link = link || `/projects/${this.slug}`
		this.image = `/images/projects/screenshots/${this.slug}.png`
		this.color = color
	}
}
