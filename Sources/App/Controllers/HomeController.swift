import Vapor
import HTTP
import Foundation

struct HomeController {
	
	
	// MARK: - Routes

	static func show(with request: Request) throws -> ResponseRepresentable {
		let path = "/images/project-screenshots"
		
		let projects = [
			[
				"name": "Carminder",
				"description": "Helps you keep track of your car's maintenance. See all your car's events at a glance and easily add a reminder, and how often you'd like to be reminded. [Discontinued as of 2014]",
				"image": "\(path)/carminder.png",
				"imagePosition": "left",
				"themeColor": "#00A29B"
			],
			[
				"name": "Expenses Planner",
				"description": "Helps you keep track of your upcoming expenses. Easily set up your upcoming expenses, their recurring intervals, a reminder, and how often you'd like to be reminded. [Discontinued as of 2014]",
				"image": "\(path)/expenses-planner.png",
				"imagePosition": "right",
				"themeColor": "#9A7CDC"
			],
			[
				"name": "Puppet Anthems",
				"description": "The fun way to learn about national anthems, for adults and kids alike. All the lyrics, all the music, all the history, and all the info related to the 32 countries from the 2014 World Cup in one great app.",
				"image": "\(path)/puppet-anthems.png",
				"imagePosition": "left",
				"themeColor": "#A91F13"
			]
		]
		
		let parameters = [
			"projects": projects
		]
		
		return try drop.view.make("home", with: parameters, for: request)
	}

}
