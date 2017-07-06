'use strict'

let users = []
// [{
// 	name: 'mohamed',
// 	age: 36
// }]
console.log("USERS => ",users)
var getUsers = function(req, res) {
	res.status(200).json(users)
}

var setUser = function(req, res) {

	console.log("setUser => ",users)

	let params = req.body

	let user = {}
	user.name = params.name
	user.age = params.age

	users.push(user)

	res.status(200).json({
		users: users
	})
}

module.exports = {
	getUsers,
	setUser
}