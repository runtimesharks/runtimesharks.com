//
// Created by Roland Leth on 09/04/2018.
//
//

import HTTP

struct TermsAndConditionsController {

	static func displayTravelStories(with request: Request) throws -> ResponseRepresentable {
		let params = [
			"title": "Travel Stories' Terms and Conditions",
			"metadata": "Travel Stories' terms and conditions"
		]

		return try drop.view.make("terms-and-conditions-travelstories", with: params, for: request)
	}

}
