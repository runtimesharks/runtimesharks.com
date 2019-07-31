module.exports = {
  // This doesn't properly work; for example, constructor properties
  // are not working, even with plugins and presets added ¯\-(ツ)-/¯
  // modify(defaultConfig) {
  // 	// modify(defaultConfig, { target, dev }, webpack) {
  // 	const config = defaultConfig // stay immutable here
  // 	config.resolve.extensions.push(".ts", ".tsx")
  // 	config.module.rules.push({
  // 		test: /\.(ts|js)x?$/,
  // 		exclude: [/node_modules/, /build/],
  // 		loader: "babel-loader",
  // 	})
  // 	return config
  // },
  plugins: [
    {
      name: "typescript",
      options: {
        useBabel: true,
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
