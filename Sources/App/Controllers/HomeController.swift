import Vapor
import HTTP
import Foundation

struct HomeController {
	
	
	// MARK: - Routes

	static func show(with request: Request) throws -> ResponseRepresentable {
		let parameters = [
			"projects": Project.all()
		]
		
		return try drop.view.make("home", with: parameters, for: request)
	}

}
