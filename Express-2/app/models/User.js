'use strict'


// var name,
// 	age,
// 	User = function(name,age){
// 		this.name = name
// 		this.age = age
// 	}

var User =class User
{
	constructor(name,age)
	{
		this.name = name
		this.age = age
	}
	get name()
	{
		return this.name 
	}
	set name(value)
	{
		this.name = value 
	}
	get age()
	{
		return this.age 
	}
	set age(value)
	{
		this.age = value 
	}
}

module.exports = User