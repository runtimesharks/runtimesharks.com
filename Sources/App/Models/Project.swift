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
	///   - image: The project's screenshot.
	///   - link: The project's url.
	init(name: String, description: String = "", image: String, link: String) {
		self.name = name
		self.description = description
		self.image = image
		imagePosition = "left"
		self.link = link
		self.slug = name
			.lowercased()
			.replacingOccurrences(of: " ", with: "-")
	}

}

extension Project {

	static func all() -> [Project] {
		let path = "/images/project-screenshots"

		var projects = [
			Project(
				name: "ChallengeBeat",
				image: "\(path)/challengebeat.png",
				link: "https://itunes.apple.com/us/app/challengebeat/id1323950655"),
			Project(
				name: "DeinDeal",
				image: "\(path)/deindeal.png",
				link: "https://itunes.apple.com/us/app/deindeal/id465657999"),
			Project(
				name: "Card Virtual",
				description: "An app that helps users save their fidelity cards (or request new ones), that also displays merchants & their offers, and offers a shopping list. With the built-in friends feature, the users can share and collaborate in real-time on their shopping lists.",
				image: "\(path)/card-virtual.png",
				link: "https://itunes.apple.com/ro/app/card-virtual/id1365350958"),
			Project(
				name: "Beraria H",
				image: "\(path)/beraria-h.png",
				link: "https://itunes.apple.com/us/app/beraria-h/id1257720997"),
			Project(
				name: "Carminder",
				image: "\(path)/carminder.png",
				link: "https://itunes.apple.com/us/app/carminder-super-simple-maintenance/id633617025"),
			Project(
				name: "Expenses Planner",
				image: "\(path)/expenses-planner.png",
				link: "https://itunes.apple.com/us/app/expenses-planner/id669431471"),
			Project(
				name: "Puppet Anthems",
				description: "The fun way to learn about national anthems, for adults and kids alike. All the lyrics, the music, the history, and all the info related to the 32 countries from the 2014 World Cup in one great app.",
				image: "\(path)/puppet-anthems.png",
				link: "http://puppetanthems.com")
		]

		for project in projects.enumerated() {
			projects[project.offset].imagePosition = project.offset % 2 == 0 ? "left" : "right"
		}

		return projects
	}

}
