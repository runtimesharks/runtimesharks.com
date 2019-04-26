import Theme from "../theme/Theme"
import ExternalLink from "./ExternalLink"
import Project from "./Project"

const webProjects = [
	new Project({
		name: "Our website",
		hasImage: false,
		color: Theme.darkBlue,
		externalLinks: [
			new ExternalLink({
				title: "GitHub",
				url: "https://github.com/runtime-sharks/homepage",
			}),
		],
	}),
	new Project({
		name: "team.cards",
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
		externalLinks: [
			new ExternalLink({
				title: "Web",
				url: "https://travelstories.world",
			}),
		],
		color: "#3b245f",
	}),
	new Project({
		name: "Roland's blog",
		externalLinks: [
			new ExternalLink({
				title: "Web",
				url: "https://rolandleth.com",
			}),
		],
		color: "#12a8da",
	}),
]

export default webProjects
