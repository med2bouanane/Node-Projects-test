'use strict'

var fs = require('fs');

var readStream = fs.createReadStream('in.txt'),
	writeStream = fs.createWriteStream('out.txt');


readStream.pipe(writeStream);
readStream.on('data', (chunk) => {
		console.log(chunk.length, ' caracteres leidos.')
	})
	.on('end', () => {
		console.log('Lectura terminada')
	});