var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry:{
		app:'./src/app.js'
	},
	output:{
		filename:'public/build/bundle.js',
		sourceMapFilename:'public/build/bundle.map'
	},
	devtool: '#source-map',
	module:{
		loaders:[
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader:'babel-loader',
				query:{
					presets:['react','es2015']
				}			
			}
		]
	}
}