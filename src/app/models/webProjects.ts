import Theme from "../theme/Theme"
import ExternalLink from "./ExternalLink"
import Project from "./Project"

const webProjects = [
	new Project({
		name: "Our website",
		summary: "Our website.",
		hasImage: false,
		color: Theme.darkBlue,
		externalLinks: [
			new ExternalLink({
				title: "GitHub",
				url: "https://github.com/runtimesharks/homepage",
			}),
		],
	}),
	new Project({
		name: "team.cards",
		summary: "Create a team page in minutes!",
		externalLinks: [
			new ExternalLink({
				title: "Web",
				url: "https://team.cards",
			}),
		],
		color: "#4054b2",
	}),
	new Project({
		name: "Travel Stories",
		summary: "Travel the world and share your journey!",
		hasImage: false,
		externalLinks: [
			new ExternalLink({
				title: "Web",
				url: "https://travelstories.world",
			}),
		],
		color: "#7324d6",
	}),
	new Project({
		name: "Roland's blog",
		summary: "Roland Leth's blog.",
		externalLinks: [
			new ExternalLink({
				title: "Web",
				url: "https://rolandleth.com",
			}),
			new ExternalLink({
				title: "GitHub",
				url: "https://github.com/rolandleth/rolandleth.com",
			}),
		],
		color: "#12a8da",
	}),
]

export default webProjects
