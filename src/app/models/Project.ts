import Theme from "../theme/Theme"
import ExternalLink from "./ExternalLink"
import GalleryImage from "./GalleryImage"

export type ProjectType = "Employee" | "Client" | "Own"

interface Schema {
	name: string
	date: string
	projectType?: ProjectType
	summary?: string
	externalLinks?: ExternalLink[]
	paddleProductId?: string
	price?: string
	link?: string
	color?: string
	hasImage?: boolean
	gallery?: GalleryImage[]
	discontinuedAt?: string
}

export default class Project {
	name: string
	date: string
	projectType: ProjectType
	summary?: string
	externalLinks: ExternalLink[]
	paddleProductId?: string
	price?: string
	link: string
	image: string
	icon: string
	hasImage: boolean
	gallery: GalleryImage[]
	slug: string
	color: string
	discontinuedAt?: string

	constructor({
		name,
		summary,
		date,
		projectType = "Own",
		externalLinks = [],
		paddleProductId,
		price,
		link,
		discontinuedAt,
		color = Theme.linkColor,
		hasImage = true,
		gallery = [],
	}: Schema) {
		this.name = name
		this.summary = summary
		this.date = date
		this.projectType = projectType
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
		this.icon = `/images/projects/icons/${this.slug}.jpg`
		this.color = color
		this.hasImage = hasImage
		this.gallery = gallery
		this.discontinuedAt = discontinuedAt
	}
}
