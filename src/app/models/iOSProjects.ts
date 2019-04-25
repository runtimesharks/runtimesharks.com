import ExternalLink from "./ExternalLink"
import { GalleryImage } from "./Gallery"
import Project from "./Project"

const iOSProjects = [
	new Project({
		name: "ChallengeBeat",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url:
					"https://itunes.apple.com/us/app/challengebeat/id1323950655?ls=1&mt",
			}),
		],
		color: "#ff0e37",
	}),
	new Project({
		name: "My Travel Stories",
		description:
			"Travel, take beautiful photos, write down your feelings and create your travel journal. Share your stories with the world and find inspiration from others for your next trips!",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://travelstories.world",
			}),
		],
		color: "#0371b8",
	}),
	new Project({
		name: "Hey, Be Well!",
		externalLinks: [
			new ExternalLink({
				title: "Home",
				url: "https://heybewell.com",
			}),
			new ExternalLink({
				title: "App Store",
				url:
					"https://itunes.apple.com/us/app/hey-be-well/id1440003341?ls=1&mt=8",
			}),
		],
		color: "#3b245f",
	}),
	new Project({
		name: "Beraria H",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://itunes.apple.com/us/app/beraria-h/id1257720997?ls=1&mt",
			}),
		],
		color: "#fa8f30",
	}),

	new Project({
		name: "Idea Trackerr",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url:
					"https://itunes.apple.com/us/app/idea-trackerr/id1459548047?ls=1&mt=8",
			}),
			new ExternalLink({
				title: "Google Play",
				url:
					"https://play.google.com/store/apps/details?id=com.runtimesharks.ideatracker",
			}),
		],
		color: "#077ee2",
	}),
	new Project({
		name: "DND Me",
		paddleProductId: "551634",
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
		name: "Goalee",
		description:
			"What drives you each day? What matters to you the most? Remind yourself often, so you don't forget what your true goals in life are!",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://itunes.apple.com/us/app/goalee/id1438115216?ls=1&mt",
			}),
		],
		color: "#7161e8",
	}),
	new Project({
		name: "Card Virtual",
		description:
			"Helps users save their fidelity cards (or request new ones), that also displays merchants & their offers and offers a shopping list. With the built-in friends feature, the users can share and collaborate in real-time on their shopping lists.",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url:
					"https://itunes.apple.com/ro/app/card-virtual/id1365350958?ls=1&mt",
			}),
		],
		color: "#fc5f25",
	}),
	new Project({
		name: "Essenza",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://itunes.apple.com/us/app/essenza/id1392962759?ls=1&mt=8",
			}),
		],
		color: "#c651a0",
	}),
	new Project({
		name: "DeinDeal",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://itunes.apple.com/us/app/deindeal/id465657999",
			}),
		],
		color: "#c40e3d",
	}),
	new Project({
		name: "DeinDeal Partners",
		link: "https://itunes.apple.com/za/app/deindeal-partners/id892826193",
	}),
	new Project({
		name: "Puppet Anthems",
		description:
			"The fun way to learn about national anthems, for adults and kids alike. All the lyrics, the music, the history, and all the info related to the 32 countries from the 2014 World Cup in one great app.",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url:
					"https://itunes.apple.com/us/app/puppet-anthems/id878308190?ls=1&mt=8",
			}),
		],
		color: "#a91f13",
	}),
	new Project({
		name: "Carminder",
		link:
			"https://itunes.apple.com/us/app/carminder-super-simple-maintenance/id633617025?ls=1&mt",
		color: "#00a29b",
	}),
	new Project({
		name: "Expenses Planner",
		link:
			"https://itunes.apple.com/us/app/expenses-planner/id669431471?ls=1&mt",
		color: "#481faf",
	}),
]

export default iOSProjects
