let LocalStrategy = require('passport-local').Strategy
let mysql = require('mysql')
let bcrypt = require('bcryptjs')
let config = require('../database/config') 

module.exports = function(passport) {

	passport.serializeUser((user, done) => {
		console.log('serializeUser => ',user)
		done(null, user);
	})

	passport.deserializeUser((obj, done)=> {
		console.log('deserializeUser => ',obj)
		done(null,obj)
	})

	passport.use(new LocalStrategy({
		passReqToCallback : true
	},(req,email,password,done)=>{
		console.log(email,password)
		
		var db_connection = mysql.createConnection(config)
		db_connection.connect()

		db_connection.query('SELECT * FROM users WHERE email = ?',email,function (error,rows,fields) {
			if(error) throw error

			db_connection.end()

			if(rows.length > 0){
				var user = rows[0]
				if(bcrypt.compareSync(password,user.password)){
					return done(null,{
						id:user.id,
						nombre:user.nombre,
						email:user.email
					},req.flash('auth_message','Bienvenido '+user.nombre))
				}
			}	

			return done(null,false,req.flash('auth_message','Email o Password incorrecto.'))
		})

	}))

}