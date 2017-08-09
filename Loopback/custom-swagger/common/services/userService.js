'use strict'

const jwt = require('jwt-simple'),
	moment = require('moment'),
	config = require('../../config')



let userService = {

	// 
	createToken: function(user) {


		const payload = { // Datos con los que vamos a construir el TOKEN
			sub: user.email,
			iat: moment().unix(), // fecha de creación del token
			exp: moment().add(14, 'days').unix() //fecha de expiración del token
		}

		return jwt.encode(payload, config.SECRET_TOKEN) // Codificar (Crear) el token con la clave secreta
	},
	//
	decodeToken: function(token) {
		// Promise nativa de ES6

		const decoded = new Promise((resolve, reject) => {

			try {
				const payload = jwt.decode(token, config.SECRET_TOKEN)

				if (payload.exp <= moment().unix()) {
					reject({
						status: 401,
						message: 'El token ha expirado'
					})
				}

				resolve("OK OK OK !!!")//({email:payload.sub})


			} catch (err) {
				reject({
					status: 500,
					message: 'Invalid Token'
				})
			}
		})

		return decoded
	}
}


module.exports = userService