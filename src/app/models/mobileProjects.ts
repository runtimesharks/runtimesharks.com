import ExternalLink from "./ExternalLink"
import { GalleryImage } from "./Gallery"
import Project from "./Project"

const mobileProjects = [
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
				title: "App Store",
				url:
					"https://itunes.apple.com/us/app/hey-be-well/id1440003341?ls=1&mt=8",
			}),
			new ExternalLink({
				title: "Home",
				url: "https://heybewell.com",
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

export default mobileProjects
