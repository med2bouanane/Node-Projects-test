'use strict'

var Clock = (function(){

	var EventEmitter = require('events').EventEmitter
	var inherits = require('util').inherits

	var Clock = function(){

		setInterval(()=>{
			this.emit('tictac')
		},1000)
	}

	inherits(Clock,EventEmitter) // Aquí Clock va a heredar de EventEmitter

	Clock.prototype.theTime = function(){
		var date = new Date()
		var hrs = addZero(date.getHours())
		var min = addZero(date.getMinutes())
		var sec = addZero(date.getSeconds())
		var msg = `${hrs}:${min}:${sec}`

		console.log(msg)
	}

	function addZero(num) {
		return (num < 10) ? ('0'+num) : num
	}

	return Clock;

})()

module.exports = Clock

