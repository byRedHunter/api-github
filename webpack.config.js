const HtmlWebpackPlugin = require('html-webpack-plugin')
// path nos va ayudar a no tener problemas con la ruta para output.path
const path = require('path')

module.exports = {
	entry: './src/app/index.js',
	output: {
		path: path.join(__dirname + '/build'),
		filename: 'bundle.js',
	},

	devServer: {
		port: 3000,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
}
