'use strict'

const mongoos = require('mongoose'),
	User = require('../models/user'),
	userService = require('../services/userService')


let auth = {


	signUp: function(req, res) {

		let body = req.body
		let user = new User()

		user.email = body.email
		user.displayName = body.displayName
		console.log('USER => ', user);
		user.save((err) => {
			if (err) res.status(500).json({
				message: `Error al crear el usuario:${err}`
			})

			return res.status(200).json({
				token: userService.createToken(user)
			})
		})
	},
	signIn: function(req, res) {

		console.log('req.body.email => ', req.body.email);
		User.find({
			email: req.body.email
		}, (err, user) => {
			console.log('USER => ', user);
			console.log('USER isEmpty ', user.length <= 0);
			if (!user || user.length <= 0) return res.status(404).json({
				message: 'No existe el usuarion'
			})
			if (err) return res.status(500).json({
				message: err
			})

			req.user = user
			res.status(200).json({
				message: 'Login Ok',
				user: req.user,
				token: userService.createToken(user)
			})
		})

	}
}


module.exports = auth