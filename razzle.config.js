module.exports = {
	plugins: [
		{
			name: "typescript",
			options: {
				useBabel: false,
				forkTsChecker: {
					tslint: false,
					typeCheck: false,
					ignoreLintWarnings: true,
					silent: true,
				},
			},
		},
	],
}
