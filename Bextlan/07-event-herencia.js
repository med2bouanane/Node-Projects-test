'use strict'

var EventEmitter = require('events').EventEmitter
var inherits = require('util').inherits

var Clock = function() { // Está será la función constructor

	setInterval(() => {
		this.emit('tictac') // Emitir el evento 'tictac' cada segundo
	}, 1000)
}

inherits(Clock, EventEmitter)

Clock.prototype.theTime = function() {
	var date = new Date()
	var hrs = date.getHours()
	var min = date.getMinutes()
	var sec = date.getSeconds()
	var msg = hrs + ':' + min + ':' + sec

	console.log(msg)
}


var cucu = new Clock() // Instancia de Clock . Y new EventEmitter() por herencia

cucu.on('tictac', () => { // Estamos a la escucha de que se suceda el evento 'tictac'
	cucu.theTime()
})