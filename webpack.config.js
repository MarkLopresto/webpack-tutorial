var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/main.js',
	],
	output: {
		path: './dist/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					// typically we should use a .babelrc file instead, but:
					plugins: ['transform-runtime'],
					presets: ['es2015']
				}
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			}
		]
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Intro to Webpack',
			template: 'src/index.html'
		})
	]
};