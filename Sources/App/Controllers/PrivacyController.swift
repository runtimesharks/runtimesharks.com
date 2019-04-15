//
// Created by Roland Leth on 09/04/2018.
//
//

import HTTP

struct PrivacyController {

	private static let path = "Privacy Policy"

	static func display(with request: Request) throws -> ResponseRepresentable {
		let params = [
			"title": "Privacy Policy",
			"metadata": "Runtime Shark's Privacy policy"
		]

		return try drop.view.make("\(path)/runtimesharks", with: params, for: request)
	}

	static func displayChallengeBeat(with request: Request) throws -> ResponseRepresentable {
		let params = [
			"title": "ChalleneBeat's Privacy Policy",
			"metadata": "ChallengeBeat's Privacy policy"
		]

		return try drop.view.make("\(path)/challengebeat", with: params, for: request)
	}

	static func displayTravelStories(with request: Request) throws -> ResponseRepresentable {
		let params = [
			"title": "Travel Stories' Privacy Policy",
			"metadata": "Travel Stories' Privacy policy"
		]

		return try drop.view.make("\(path)/travelstories", with: params, for: request)
	}

	static func displayGoalee(with request: Request) throws -> ResponseRepresentable {
		let params = [
			"title": "Goalee's Privacy Policy",
			"metadata": "Goalee's Privacy policy"
		]

		return try drop.view.make("\(path)/goalee", with: params, for: request)
	}

	static func displayIdeaTracker(with request: Request) throws -> ResponseRepresentable {
		let params = [
			"title": "Idea Trackerr's Privacy Policy",
			"metadata": "Idea Trackerr's Privacy policy"
		]

		return try drop.view.make("\(path)/idea-tracker", with: params, for: request)
	}

}
