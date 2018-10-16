import Vapor
import HTTP
import Foundation

struct MentoringController {


	// MARK: - Routes

	static func show(with request: Request) throws -> ResponseRepresentable {
		return try drop.view.make("mentoring", with: [:], for: request)
	}

}
