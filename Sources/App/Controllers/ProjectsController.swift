import Vapor
import HTTP
import Foundation

struct ProjectsController {


	// MARK: - Routes

	static func show(with request: Request) throws -> ResponseRepresentable {
		let parameters = [
			"projects": Project.all()
		]

		return try drop.view.make("projects", with: parameters, for: request)
	}

}
