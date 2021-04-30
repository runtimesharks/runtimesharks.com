import ExternalLink from "./ExternalLink"
import GalleryImage from "./GalleryImage"
import Project from "./Project"

const macProjects = [
	new Project({
		name: "DND Me",
		summary:
			"Activate Do Not Disturb for a few hours and work distraction free.",
		date: "2019-04-01",
		paddleProductId: "551634",
		price: "€4.99",
		externalLinks: [
			new ExternalLink({
				title: "Download Free Trial",
				url: "https://dl.devmate.com/com.runtimesharks.dndme/DNDMe.dmg",
			}),
		],
		color: "#f15745",
		gallery: [
			new GalleryImage({
				url: "/images/projects/dnd-me/off.jpg",
				caption: "Choices for any need",
			}),
			new GalleryImage({
				url: "/images/projects/dnd-me/on.jpg",
				caption: "The icon changes if DND is active",
			}),
			new GalleryImage({
				url: "/images/projects/dnd-me/off-notification.jpg",
				caption: "Get notified when DND turns back on",
			}),
			new GalleryImage({
				url: "/images/projects/dnd-me/pomodoro-on.jpg",
				caption: "Not allowed to mess it up",
			}),
			new GalleryImage({
				url: "/images/projects/dnd-me/pomodoro-paused.jpg",
				caption: "Changed your mind?",
			}),
			new GalleryImage({
				url: "/images/projects/dnd-me/pomodoro-notification.jpg",
				caption: "Get notified when your pause starts",
			}),
			new GalleryImage({
				url: "/images/projects/dnd-me/schedule-active.jpg",
				caption: "Your schedule has priority",
			}),
			new GalleryImage({
				url: "/images/projects/dnd-me/deep-links.jpg",
				caption: "Deep links for all entries",
			}),
			new GalleryImage({
				url: "/images/projects/dnd-me/light.jpg",
				caption: "Not a fan of light, but it looks good",
			}),
		],
	}),
	new Project({
		name: "TimeProgress",
		summary:
			"See at a glance what percentage of the current year, quarter, month, week or day has passed (or is remaining).",
		date: "2019-05-01",
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
].sort((_, p2) => (p2.discontinuedAt ? -1 : 0))

export default macProjects
