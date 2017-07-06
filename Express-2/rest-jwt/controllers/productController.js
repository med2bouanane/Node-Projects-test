'use strict'
const Product = require('../models/product')

let productController = {
	getProductById: function(req, res) {

		let productId = req.params.productId

		Product.findById(productId, (err, product) => {

			if (!product) return res.status(404).json({
				message: `El producto ${productId} no existe`
			})

			if (err) return res.status(500).json({
				message: `Error al guardad en BD ${err}`
			})

			res.status(200).json({
				product: product
			})
		})
	},

	getProducts: function(req, res) {

		Product.find({}, (err, products) => {

			if (!products) return res.status(404).json({
				message: `El producto ${productId} no existe`
			})

			if (err) return res.status(500).json({
				message: `Error al guardad en BD ${err}`
			})

			res.status(200).json({
				products: products
			})
		})
	},

	saveProduct: function(req, res) {

		console.log('POST /api/product')
		console.log(req.body)

		let product = new Product()
		let body = req.body

		product.name = body.name
		product.picture = body.picture
		product.price = body.price
		product.category = body.category
		product.description = body.description

		product.save((err, productStored) => {
			if (err) return res.status(500).json({
				message: `Error al guardad en BD ${err}`
			})

			res.status(200).json({
				product: productStored
			})
		})

		// Content-Type: application/json
		//res.status(200).json({message: 'El producto se ha recibido'})

		// Content-Type: application/x-www-form-urlencoded
		//res.send(200, {message: 'El producto se ha recibido'})
	},

	updateProduct: function(req, res) {

		console.log('PUT: /api/product/:productId')
		console.log(req.body)

		let productId = req.params.productId
		let productBody = req.body

		Product.findByIdAndUpdate(productId, productBody, (err, productUpdated) => {

			if (err) return res.status(500).json({
				message: `Error al actualizar el producto ${productId}`
			})

			res.status(200).json({
				product: productUpdated
			})
		})

	},

	deleteProduct: function(req, res) {

		let productId = req.params.productId

		Product.findById(productId, (err, product) => {

			if (!product) return res.status(404).json({
				message: `El producto ${productId} no existe`
			})

			if (err) return res.status(500).json({
				message: `Error al borrar: ${err}`
			})

			product.remove((err) => {

				if (err) return res.status(500).json({
					message: `Error al borrar: ${err}`
				})
				res.status(200).json({
					delete: true,
					product: product
				})
			})
		})
	}
}

module.exports = productController