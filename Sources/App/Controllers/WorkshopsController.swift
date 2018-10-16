import Vapor
import HTTP
import Foundation

struct WorkshopsController {


	// MARK: - Routes

	static func show(with request: Request) throws -> ResponseRepresentable {
		return try drop.view.make("workshops", with: [:], for: request)
	}

}
