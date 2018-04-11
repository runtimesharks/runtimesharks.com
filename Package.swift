// swift-tools-version:4.0

import PackageDescription

let package = Package(
    name: "RuntimeSharks",
    products: [
        .executable(name: "App", targets: ["App"])
    ],
    dependencies: [
        .package(url: "https://github.com/vapor/vapor.git", .upToNextMajor(from: "2.4.0")),
        .package(url: "https://github.com/vapor/leaf-provider.git", .upToNextMajor(from: "1.1.0"))
    ],
    targets: [
        .target(name: "App", dependencies: ["Vapor", "LeafProvider"],
               exclude: [
                   "Config",
                   "Database",
                   "Public",
                   "Resources"
               ]),
        .testTarget(name: "AppTests", dependencies: ["App", "Testing"])
    ]
)

