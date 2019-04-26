export class GalleryImage {
	url: string
	caption: string

	constructor({ url, caption }: GalleryImage) {
		this.url = url
		this.caption = caption
	}
}

type Gallery = GalleryImage[]

export default Gallery
