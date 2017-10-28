//
//  Response.swift
//  RuntimeSharksPackageDescription
//
//  Created by Roland Leth on 28.10.2017.
//

import HTTP

extension Response {
	
	static var rootRedirect: Response { return Response(redirect: "/") }
	
}
