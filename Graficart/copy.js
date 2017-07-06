'use strict'

const fs = require('fs')

// leemos demo.mp4 y lo copiamos en copy.mp4 
// fs.readFile('demo.mp4', (err, data) => {
// 	if (err) throw err

// 	fs.writeFile('copy.mp4', data, (err) => {
// 		if (err) throw err

// 		console.log('El fichero se ha copiado correctamente');
// 	});
// })



var readStream = fs.createReadStream('demo2.mp4'), // Stream de lectura
	writeStream = fs.createWriteStream('copy.mp4'), // Stream de escritura
	total = 0,
	progressList = [],
	progress = 0,
	progressTrace = '=>';

fs.stat('demo2.mp4', (err, stat) => {
	total = stat.size
	console.log('TOTAL=> ', total);

	reading()
});

var reading = function() {
	readStream.on('data', (chunk) => {
		progress += chunk.length
			//progressTrace += progressTrace
			//progressList.push(progress)
		console.log(total + ' | ' + progress + ' | ' + Math.round(100 * progress / total) + '%', ' datos leidos.')
			//process.stdout.write(progressTrace + Math.round(100 * progress / total))
	})
}

readStream.on('end', () => {
	console.log('Lectura terminada')
})

readStream.pipe(writeStream)

writeStream.on('finish', () => {
	console.log('El ficher ha sido copiado correctamente');
})