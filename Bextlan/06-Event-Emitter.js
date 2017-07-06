'use strict'

var EventEmitter = require('events').EventEmitter
var miListener = new EventEmitter()

// Declaración de eventos personalizados
miListener.on('myEvent', (msg) => {
	console.log(msg)
})

miListener.once('myEvent', (msg) => {
	console.log('La Primera vez')
})


// Emitir el evento
miListener.emit('myEvent', 'Soy un emisor de eventos')
miListener.emit('myEvent', 'Volviendo a emitir')



// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a,b) => {
//   console.log('an event occurred!'+ a+b);
// });
// myEmitter.emit('event','Hola ','Mundo');