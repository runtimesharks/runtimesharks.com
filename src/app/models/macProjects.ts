import ExternalLink from "./ExternalLink"
import GalleryImage from "./GalleryImage"
import Project from "./Project"

const macProjects = [
	new Project({
		name: "DND Me",
		summary:
			"Activate Do Not Disturb for a few hours and work distraction free.",
		paddleProductId: "551634",
		price: "€4.99",
		externalLinks: [
			new ExternalLink({
				title: "Download",
				url: "https://dl.devmate.com/com.runtimesharks.dndme/DNDMe.dmg",
			}),
		],
		color: "#f15745",
		gallery: [
			new GalleryImage({
				url: "/images/projects/dnd-me/on-icon.png",
				caption: "The icon changes if DND Me is active.",
			}),
			new GalleryImage({
				url: "/images/projects/dnd-me/on-menu.png",
				caption: "See the time left until DND Me will turn off Do Not Disturb.",
			}),
		],
	}),
	new Project({
		name: "TimeProgress",
		summary:
			"See at a glance what percentage of the current year, quarter, month, week or day has passed (or is remaining).",
		paddleProductId: "558933",
		price: "€2.99",
		externalLinks: [
			new ExternalLink({
				title: "Download",
				url:
					"https://dl.devmate.com/com.runtimesharks.timeprogress/TimeProgress.dmg",
			}),
		],
		color: "#8E54E9",
	}),
]

export default macProjects
