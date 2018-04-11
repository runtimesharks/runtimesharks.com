//
//  Droplet.swift
//  App
//
//  Created by Roland Leth on 28.10.2017.
//

import Vapor
import LeafProvider

extension Droplet {
	
	var port: String {
		return config["server", "port"]?.string ?? "8000"
	}
	var production: Bool {
		return config.environment == .production
	}
	
	static func setup() throws -> Droplet {
		let config = try Config()
		try config.addProvider(LeafProvider.Provider.self)
		
		config.addConfigurable(middleware: RedirectMiddleware(), name: "redirect")
		config.addConfigurable(middleware: HeadersMiddleware(), name: "headers")
		config.addConfigurable(middleware: AppErrorMiddleware(), name: "app-error")
		config.addConfigurable(middleware: AppFileMiddleware(publicDir: config.publicDir), name: "app-file")
		//		config.addConfigurable(middleware: GzipMiddleware(), name: "gzip")
		
		let drop = try Droplet(config)
		
		return drop
	}
	
	func addRoutes() -> Droplet {
		get("/", handler: HomeController.show)
		get("/privacy-policy", handler: PrivacyController.display)
		get("privacy/challengebeat", handler: PrivacyController.displayChallengeBeat)
		
		return self
	}
	
}

