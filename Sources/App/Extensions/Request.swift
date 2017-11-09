//
//  Request.swift
//  App
//
//  Created by Roland Leth on 28.10.2017.
//

import Foundation
import HTTP

extension Request {
	
	var isSecure: Bool {
		// Specific to Heroku's SSL handling.
		return headers["x-forwarded-proto"]?.string == "https" || !drop.production
	}
	
	var hasWWW: Bool {
		return uri.hostname.hasPrefix("www") && drop.production
	}
	
	var hasTrailingSlash: Bool {
		return uri.path.last == "/" && uri.path.count > 1
	}
	
	var rootRedirect: Response {
		return Response(headers: headers, redirect: "/", .normal)
	}
	
	var pathWithoutTrailingSlash: String {
		guard hasTrailingSlash else { return uri.path }
		
		uri.path.removeLast()
		
		return uri.path
	}
	
	var domain: String {
		guard drop.production else { return "http://localhost:\(drop.port)" }
		
		return "https://\(uri.hostname)"
	}
	
}

extension Message {
	
	func setContentType(to type: ContentType) {
		headers["Content-Type"] = type.rawValue
	}
	
}

extension URLRequest {
	
	mutating func setContentType(to type: ContentType) {
		setValue(type.rawValue, forHTTPHeaderField: "Content-Type")
	}
	
}

