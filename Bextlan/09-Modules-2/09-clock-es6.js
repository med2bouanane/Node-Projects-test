'use strict'
const EventEmitter = require('events').EventEmitter
const inherits = require('util').inherits


class Clock
{

	
	constructor()
	{
		setInterval(()=>{
			this.emit('tictac')
		},1000)

		inherits(Clock,EventEmitter) // Aquí Clock va a heredar de EventEmitter
	}


	theTime()
	{
		var date = new Date()
		var hrs = this.addZero(date.getHours())
		var min = this.addZero(date.getMinutes())
		var sec = this.addZero(date.getSeconds())
		var msg = `${hrs}:${min}:${sec}`

		console.log(msg)
	}

	addZero(num) 
	{
		return (num < 10) ? ('0'+num) : num
	}


}


module.exports = Clock

