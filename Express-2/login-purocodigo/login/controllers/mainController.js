/*
	exports all fileName of controllers that are in the controllers folder
	example:  	{
					homeController: {
						main: [Function: main]
					}
				}
*/
'use strict'

const fs = require('fs'),
	path = require('path')


let files = fs.readdirSync(__dirname)

files.forEach((file) => {
	let fileName = path.basename(file, '.js')

	if (fileName !== 'mainController') {
		exports[fileName] = require('./' + fileName)
	}
})