'use strict'


var Clock = require('./09-clock.js')


var cucu = new Clock()

cucu.on('tictac',()=>{
	cucu.theTime()
})