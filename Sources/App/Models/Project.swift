//
//  Project.swift
//  App
//
//  Created by Roland Leth on 30.10.2017.
//

import Vapor

protocol NR: NodeRepresentable {}
extension NR {

	func makeNode(in context: Context?) throws -> Node {
		let mirror = Mirror(reflecting: self)
		var node: [String: Node] = [:]

		for child in mirror.children {
			guard let label = child.label else { continue }

			if let stringValue = child.value as? String {
				node[label] = Node(stringValue)
			} else if let nodeValue = child.value as? NR {
				node[label] = try nodeValue.makeNode(in: context)
			} else if let nodeValues = child.value as? [NR] {
				node[label] = try nodeValues
					.map { try $0.makeNode(in: context) }
					.makeNode(in: context)
			}
		}

		return try node.makeNode(in: context)
	}

}

struct ExternalLink: NR {

	let title: String
	let url: String

}

struct Project: NR {

	enum State: String {
		case major
		case minor
		case discontinued
	}

	let name: String
	var description: String
	let paddleProductId: String?
	var image: String
	var imagePosition: String
	var link: String
	let externalLinks: [ExternalLink]
	let slug: String
	let type: String

	/// Creates a new project.
	///
	/// - Parameters:
	///   - description: This should be skipped for projects that require raw HTML, for hrefs, for example. The description is added directly in the leaf file.
	///   - image: The project's screenshot. Optional for minor and old projects.
	///   - link: The project's url.
	init(name: String, description: String = "", paddleProductId: String? = nil, link: String? = nil, externalLinks: [ExternalLink] = [], state: State) {
		self.name = name
		self.description = description
		self.paddleProductId = paddleProductId
		imagePosition = "left"
		// Compiler complains about the `??` ¯\_(ツ)_/¯
		let slug = name
			.lowercased()
			.replacingOccurrences(of: "&", with: "")
			.replacingOccurrences(of: " ", with: "-")
			.replacingOccurrences(of: "--", with: "-")
		self.image = "/images/projects/screenshots/\(slug).png"
		self.link = link ?? "/projects/\(slug)"
		self.externalLinks = externalLinks
		self.slug = slug
		self.type = state.rawValue
	}

}

extension Project {

	static func all() -> [Project] {
		var projects = [
			Project(
				name: "Idea Trackerr",
				externalLinks: [
					ExternalLink(title: "App Store", url: "https://itunes.apple.com/us/app/idea-trackerr/id1459548047"),
					ExternalLink(title: "Google Play", url: "https://play.google.com/store/apps/details?id=com.runtimesharks.ideatracker")
				],
				state: .minor),
			Project(
				name: "DND Me",
				paddleProductId: "551634",
				externalLinks: [
					ExternalLink(title: "Download", url: "https://dl.devmate.com/com.runtimesharks.dndme/DNDMe.dmg")
				],
				state: .minor),
			Project(
				name: "Goalee",
				description: "What drives you each day? What matters to you the most? Remind yourself often, so you don't forget what your true goals in life are!",
				externalLinks: [
					ExternalLink(title: "App Store", url: "https://itunes.apple.com/us/app/goalee/id1438115216?ls=1&mt")
				],
				state: .minor),
			Project(
				name: "ChallengeBeat",
				externalLinks: [
					ExternalLink(title: "App Store", url: "https://itunes.apple.com/us/app/challengebeat/id1323950655?ls=1&mt")
				],
				state: .minor),

			Project(
				name: "My Travel Stories",
				description: "Travel, take beautiful photos, write down your feelings and create your travel journal. Share your stories with the world and find inspiration from others for your next trips!",
				externalLinks: [
					ExternalLink(title: "App Store", url: "https://travelstories.world")
				],
				state: .minor),
			Project(
				name: "Card Virtual",
				description: "Helps users save their fidelity cards (or request new ones), that also displays merchants & their offers and offers a shopping list. With the built-in friends feature, the users can share and collaborate in real-time on their shopping lists.",
				externalLinks: [
					ExternalLink(title: "App Store", url: "https://itunes.apple.com/ro/app/card-virtual/id1365350958?ls=1&mt")
				],
				state: .minor),
			Project(
				name: "Beraria H",
				externalLinks: [
					ExternalLink(title: "App Store", url: "https://itunes.apple.com/us/app/beraria-h/id1257720997?ls=1&mt")
				],
				state: .minor),
			Project(
				name: "Essenza",
				externalLinks: [
					ExternalLink(title: "App Store", url: "https://itunes.apple.com/us/app/essenza/id1392962759?ls=1&mt=8")
				],
				state: .minor),
			Project(
				name: "DeinDeal",
				externalLinks: [
					ExternalLink(title: "App Store", url: "https://itunes.apple.com/us/app/deindeal/id465657999")
				],
				state: .minor),
			Project(
				name: "DeinDeal Partners",
				link: "https://itunes.apple.com/za/app/deindeal-partners/id892826193",
				state: .minor),

			Project(
				name: "Puppet Anthems",
				description: "The fun way to learn about national anthems, for adults and kids alike. All the lyrics, the music, the history, and all the info related to the 32 countries from the 2014 World Cup in one great app.",
				externalLinks: [
					ExternalLink(title: "App Store", url: "https://itunes.apple.com/us/app/puppet-anthems/id878308190?ls=1&mt=8")
				],
				state: .minor),
			Project(
				name: "Carminder",
				link: "https://itunes.apple.com/us/app/carminder-super-simple-maintenance/id633617025?ls=1&mt",
				state: .minor),
			Project(
				name: "Expenses Planner",
				link: "https://itunes.apple.com/us/app/expenses-planner/id669431471?ls=1&mt",
				state: .minor)
		]

		for project in projects.enumerated() {
			projects[project.offset].imagePosition = project.offset % 2 == 0 ? "left" : "right"
		}

		return projects
	}

}
