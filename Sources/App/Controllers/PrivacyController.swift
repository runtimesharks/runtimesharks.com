//
// Created by Roland Leth on 09/04/2018.
// 
//

import HTTP

struct PrivacyController {
	
	static func display(with request: Request) throws -> ResponseRepresentable {
		let params = [
			"title": "Privacy Policy",
			"metadata": "Roland Leth's privacy policy"
		]
		
		return try drop.view.make("privacy-policy", with: params, for: request)
	}
	
}
