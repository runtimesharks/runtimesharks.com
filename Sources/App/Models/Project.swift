//
//  Project.swift
//  App
//
//  Created by Roland Leth on 30.10.2017.
//

import Vapor

struct Project: NodeRepresentable {

	let name: String
	let description: String
	let image: String
	var imagePosition: String
	let link: String
	let slug: String
	let type: String

	func makeNode(in context: Context?) throws -> Node {
		let mirror = Mirror(reflecting: self)
		var node: [String: String] = [:]

		for child in mirror.children {
			guard let label = child.label else { continue }
			guard let value = child.value as? String else { continue }
			node[label] = value
		}

		return try node.makeNode(in: context)
	}

	/// Creates a new project.
	///
	/// - Parameters:
	///   - description: This should be skipped for projects that require raw HTML, for hrefs, for example. The description is added directly in the leaf file.
	///   - image: The project's screenshot. Optional for minor and old projects.
	///   - link: The project's url.
	init(name: String, description: String = "", image: String = "", link: String, type: String) {
		self.name = name
		self.description = description
		self.image = image
		imagePosition = "left"
		self.link = link
		self.slug = name
			.lowercased()
			.replacingOccurrences(of: "&", with: "")
			.replacingOccurrences(of: " ", with: "-")
			.replacingOccurrences(of: "--", with: "-")
		self.type = type
	}

}

extension Project {

	static func all() -> [Project] {
		let path = "/images/projects/screenshots"
		let projectsPath = "https://rolandleth.com/projects"

		var projects = [
			Project(
				name: "My Travel Stories",
				description: "Travel, take beautiful photos, write down your feelings and create your travel journal. Share your stories with the world and find inspiration from others for your next trips!",
				image: "\(path)/my-travel-stories.png",
				link: "https://itunes.apple.com/us/app/my-travel-stories/id1395335605?ls=1&mt",
				type: "major"),
			Project(
				name: "Goalee",
				description: "What drives you each day? What matters to you the most? Remind yourself often, so you don't forget what your true goals in life are!",
				image: "\(path)/goalee.png",
				link: "https://itunes.apple.com/us/app/goalee/id1438115216?ls=1&mt",
				type: "major"),
			Project(
				name: "ChallengeBeat",
				image: "\(path)/challengebeat.png",
				link: "https://itunes.apple.com/us/app/challengebeat/id1323950655?ls=1&mt",
				type: "major"),

			Project(
				name: "Card Virtual",
				description: "Helps users save their fidelity cards (or request new ones), that also displays merchants & their offers and offers a shopping list. With the built-in friends feature, the users can share and collaborate in real-time on their shopping lists.",
				image: "\(path)/card-virtual.png",
				link: "https://itunes.apple.com/ro/app/card-virtual/id1365350958?ls=1&mt",
				type: "minor"),
			Project(
				name: "Beraria H",
				image: "\(path)/beraria-h.png",
				link: "https://itunes.apple.com/us/app/beraria-h/id1257720997?ls=1&mt",
				type: "minor"),
			Project(
				name: "Essenza",
				link: "https://itunes.apple.com/us/app/essenza/id1392962759?ls=1&mt=8",
				type: "minor"),
			Project(
				name: "Carminder",
				link: "https://itunes.apple.com/us/app/carminder-super-simple-maintenance/id633617025?ls=1&mt",
				type: "minor"),
			Project(
				name: "Puppet Anthems",
				description: "The fun way to learn about national anthems, for adults and kids alike. All the lyrics, the music, the history, and all the info related to the 32 countries from the 2014 World Cup in one great app.",
				link: "http://puppetanthems.com",
				type: "minor"),
			Project(
				name: "DeinDeal",
				image: "\(path)/deindeal.png",
				link: "https://itunes.apple.com/us/app/deindeal/id465657999",
				type: "minor"),
			Project(
				name: "DeinDeal Partners",
				link: "https://itunes.apple.com/za/app/deindeal-partners/id892826193",
				type: "minor"),

			Project(
				name: "Expenses Planner",
				link: "https://itunes.apple.com/us/app/expenses-planner/id669431471?ls=1&mt",
				type: "old"),
			Project(
				name: "Bouncy B",
				link: "\(projectsPath)/bouncy-b",
				type: "old"),
			Project(
				name: "iWordJuggle",
				link: "\(projectsPath)/iwordjuggle",
				type: "old"),
			Project(
				name: "SOS & Morse",
				link: "\(projectsPath)/sos-morse",
				type: "old")
		]

		for project in projects.enumerated() {
			projects[project.offset].imagePosition = project.offset % 2 == 0 ? "left" : "right"
		}

		return projects
	}

}
