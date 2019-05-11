import Theme from "../theme/Theme"
import ExternalLink from "./ExternalLink"
import GalleryImage from "./GalleryImage"

interface Schema {
	name: string
	externalLinks?: ExternalLink[]
	paddleProductId?: string
	price?: string
	link?: string
	color?: string
	hasImage?: boolean
	gallery?: GalleryImage[]
}

export default class Project {
	name: string
	externalLinks: ExternalLink[]
	paddleProductId?: string
	price?: string
	link: string
	image: string
	hasImage: boolean
	gallery: GalleryImage[]
	slug: string
	color: string

	constructor({
		name,
		externalLinks = [],
		paddleProductId,
		price,
		link,
		color = Theme.linkColor,
		hasImage = true,
		gallery = [],
	}: Schema) {
		this.name = name
		this.externalLinks = externalLinks
		this.paddleProductId = paddleProductId
		this.price = price
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
		this.hasImage = hasImage
		this.gallery = gallery
	}
}
