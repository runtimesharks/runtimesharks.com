//
//  Droplet.swift
//  App
//
//  Created by Roland Leth on 28.10.2017.
//

import Vapor
import Foundation
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

		let logger = Logger(workDir: config.workDir)

		let drop: Droplet

		if config.arguments.contains("--customLogger") {
			drop = try Droplet(config: config, log: logger)
		}
		else {
			drop = try Droplet(config)
		}

		return drop
	}

	func addRoutes() -> Droplet {
		let builders = [self, grouped("ro")]

		builders.forEach {
			$0.get("/", handler: HomeController.show)
			
			$0.get("/workshops", handler: WorkshopsController.show)
			$0.get("/mentoring", handler: MentoringController.show)
			$0.get("/consulting", handler: ConsultingController.show)
			ProjectsController.addRoutes(to: $0)
			$0.get("privacy/runtimesharks", handler: PrivacyController.display)
			$0.get("privacy/challengebeat", handler: PrivacyController.displayChallengeBeat)
			$0.get("privacy/travelstories", handler: PrivacyController.displayTravelStories)
			$0.get("privacy/goalee", handler: PrivacyController.displayGoalee)
			$0.get("terms-and-conditions/travelstories", handler: TermsAndConditionsController.displayTravelStories)
		}

		return self
	}

}

