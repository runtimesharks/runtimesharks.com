import Vapor
import HTTP
import Foundation

struct HomeController {
	
	
	// MARK: - Routes

	static func show(with request: Request) throws -> ResponseRepresentable {
		return try drop.view.make("home", with: [:], for: request)
	}

}
