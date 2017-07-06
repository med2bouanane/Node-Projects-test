'use strict'

var clock = require('./09-clock-es6.js')

var cucu = new clock()
cucu.on('tictac',()=>{
	cucu.theTime()
})