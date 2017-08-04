'use strict'

const express = require('express'),
	router = express.Router(),
	productController = require('../controllers/productController'),
	authMiddleware = require('../middlewares/auth')

// GET: product
//router.get('/', authMiddleware.isAuth, productController.getProducts)
//schema:
// $ref: '#/definitions/Product'
/**
 * @swagger
 * /api/product:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns all products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of products
 *         
 */
router.get('/', productController.getProducts)

//GET: by Id Product
//router.get('/:productId', productController.getProductById)

// POST: Product
router.post('/', productController.saveProduct)

// PUT:
router.put('/:productId', productController.updateProduct)

// DELETE:
router.delete('/:productId', productController.deleteProduct)


router.get('/private', authMiddleware.isAuth, (req, res) => {

	console.log('body => ', req.body)
	console.log('user => ', req.user);

	res.status(200).json({
		body: req.body,
		headers: req.headers,
		user: req.user,
		message: 'Acceso correcto'
	})
})

module.exports = router