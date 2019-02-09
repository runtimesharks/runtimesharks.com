import Vapor
import HTTP
import Foundation

struct ProjectsController {

	static func addRoutes(to builder: RouteBuilder) {
		let builder = builder.grouped("projects")
		
		builder.get("/", handler: show)
		builder.get("/dnd-me", handler: showDNDMe)
	}

	// MARK: - Routes

	static func showDNDMe(with request: Request) throws -> ResponseRepresentable {
		let path = "/images/projects/dnd-me/"
		
		var project = Project.all().first { $0.name == "DND Me" }!
		project.image = "\(path)off-menu.png"
		project.link = ""
		
		let parameters: [String : Any] = [
			"project": project,
			"gallery": [
				[
					"image": "\(path)on-icon.png",
					"description": "The icon changes if DND Me is active."
				],
				[
					"image": "\(path)on-menu.png",
					"description": "See the time left until DND Me will turn off Do Not Disturb."
				]
			]
		]
		
		return try drop.view.make("project", with: parameters, for: request)
	}
	
	static func show(with request: Request) throws -> ResponseRepresentable {
		let parameters = [
			"projects": Project.all()
		]

		return try drop.view.make("projects", with: parameters, for: request)
	}

}
