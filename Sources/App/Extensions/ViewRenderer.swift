//
//  ViewRenderer.swift
//  App
//
//  Created by Roland Leth on 28.10.2017.
//

import Foundation
import HTTP
import Vapor

extension ViewRenderer {

	func make(_ path: String, with params: [String: Any], for request: Request) throws -> View {
		let footerParams: [String: Any] = [
			"fullRoot": request.domain,
			"production": drop.production,
			"year": Calendar.current.component(.year, from: Date())
		]

		let name = "Runtime Sharks"

		let metadataParams: [String: Any] = [
			"title": name,
			"path": request.pathWithoutTrailingSlash,
			"metadata": "Runtime Sharks is a software development company, mainly focusing on iOS."
		]

		var params = footerParams + metadataParams + params
		let title = params["title"] as? String ?? name

		if title != name {
			params["title"] = "\(name): " + title
		}

		return try make(path, params, for: request)
	}

}



