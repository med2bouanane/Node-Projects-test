'use strict'

const mongoose = require('mongoose'),
	Schema = mongoose.Schema,

	ProductSchema = new Schema({
		name: String,
		picture: String,
		price: {
			type: Number,
			default: 0
		},
		category: {
			type: String,
			enum: ['computers', 'phones', 'accesories']
		},
		description: String
	})


let Product = mongoose.model('Product', ProductSchema)

module.exports = Product