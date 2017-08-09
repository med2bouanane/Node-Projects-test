'use strict'


const userService = require('../services/userService')



let authMiddleware = {

	isAuth: function(req, res, next) {
		if (!req.headers.authorization) {
			return res.status(403).json({
				message: 'No tienes autorización'
			})
		}

		const token = req.headers.authorization.split(" ")[1]

		// const payload = jwt.decode(token, config.SECRET_TOKEN)

		// if (payload.exp <= moment().unix()) {
		// 	return res.status(401).json({
		// 		message: 'El token ha expirado'
		// 	})
		// }

		// req.user = payload.sub
		// next()

		userService.decodeToken(token)
			.then((response) => {
				req.user = response
				console.log('response => ',response);
				next()
			})
			.catch((response) => {
				res.status(response.status).json(response.message)
			})

	}
}


module.exports = authMiddleware