'use strict'

var User = require('../models/User')

let users = []

var getUsers = function(req,res){

	res.status(200).json(users)
}

var setUser = function (req,res) {
	let params = req.body

	let user = new User(params.name,params.age)
	users.push(user)

	res.status(200).json({users:users})
}

module.exports = {
	getUsers,
	setUser
}