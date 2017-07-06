const mysql = require('mysql'),
	bcrypt = require('bcryptjs'),
	config = require('../database/config')


module.exports = {

	// GET: página de registro
	getSignUp: function(req, res, next) {
		return res.render('auth/signup')
	},
	// POST: registrar un usuario
	postSignUp: function(req, res, nest) {
		//console.log(req.body)
		// Encriptar el password
		let salt = bcrypt.genSaltSync(10)
		let password = bcrypt.hashSync(req.body.password, salt)
			// Crear nuevo usuario
		let user = {
				email: req.body.email,
				nombre: req.body.nombre,
				password: password
			}
			// Crear conexión a mysql, e insertar el usuario en db
		var db_connection = mysql.createConnection(config)
		db_connection.connect()
		db_connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
				if (error) //throw error
				{
					console.error(error);
				}
				db_connection.end()
			})
			// Enviar un mensaje a la página de redirección
		req.flash('info', 'Se ha registrado correctamente, puede iniciar sesión')
		return res.redirect('/auth/signin')
	},
	// GET página de login
	getSignIn: function(req, res, next) {
		return res.render('auth/signin', {
			message: req.flash('info'),
			auth_message: req.flash('auth_message')
		})
	},
	// GET logout
	logout: function(req, res, next) {
		req.logout() // es un metodo de passport
		res.redirect('/auth/signin')
	},
	// GET: Panel Page
	getUserPanel : function (req,res,next) {
		var data = {
			isAuthenticated: req.isAuthenticated(),
			user: req.user
		}
		res.render('auth/panel', data)
	}
}