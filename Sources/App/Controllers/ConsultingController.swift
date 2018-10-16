import Vapor
import HTTP
import Foundation

struct ConsultingController {


	// MARK: - Routes

	static func show(with request: Request) throws -> ResponseRepresentable {
		return try drop.view.make("consulting", with: [:], for: request)
	}

}
