export default class ExternalLink {
	title: string
	url: string

	constructor({ title, url }: ExternalLink) {
		this.title = title
		this.url = url
	}
}
