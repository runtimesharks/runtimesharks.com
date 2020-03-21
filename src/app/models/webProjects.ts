import Theme from "../theme/Theme"
import ExternalLink from "./ExternalLink"
import Project from "./Project"

const webProjects = [
  new Project({
    name: "Our website",
    summary: "Our website.",
    date: "2019-04-01",
    hasImage: false,
    color: Theme.darkBlue,
    externalLinks: [
      new ExternalLink({
        title: "GitLab",
        url: "https://gitlab.com/runtimesharks/runtimesharks.com",
      }),
    ],
  }),
  new Project({
    name: "team.cards",
    summary: "Create a team page in minutes!",
    date: "2019-03-01",
    color: "#4054b2",
    discontinuedAt: "2020",
  }),
  new Project({
    name: "Loan calculator",
    summary:
      "Calculate monthly payments and differences between different scenarios.",
    date: "2019-10-30",
    color: Theme.darkBlue,
  }),
  new Project({
    name: "Travel Stories",
    summary: "Travel the world and share your journey!",
    date: "2018-06-01",
    hasImage: false,
    color: "#7324d6",
    discontinuedAt: "2020",
  }),
  new Project({
    name: "Roland's blog",
    summary: "Roland Leth's blog.",
    date: "2019-05-01",
    externalLinks: [
      new ExternalLink({
        title: "Visit",
        url: "https://rolandleth.com",
      }),
      new ExternalLink({
        title: "GitLab",
        url: "https://gitlab.com/runtimesharks/rolandleth.com",
      }),
    ],
    color: "#12a8da",
  }),
].sort((_, p2) => (p2.discontinuedAt ? -1 : 0))

export default webProjects
