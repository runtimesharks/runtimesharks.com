export default class ExternalLink {
	title: string
	url: string

	constructor(param: ExternalLink) {
		Object.assign(this, param)
	}
}
