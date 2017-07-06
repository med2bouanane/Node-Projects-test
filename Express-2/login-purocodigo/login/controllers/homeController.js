'use strict'


module.exports = {

	//data: {},
	main: function(req, res, next) {

		var data = {
			auth_message: req.flash('auth_message'),
			isAuthenticated: req.isAuthenticated(),
			user: req.user
		}
		console.log('DATA_HOME => ', data)
		res.render('index', data)
	}

}