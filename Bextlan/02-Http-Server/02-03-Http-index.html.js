'use strict'

const http = require('http')
const url = require('url')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 8000

const server = http.createServer()


server.on('request', (req, res) => {

	//res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html;charset=utf-8');

	fs.readFile('index.html', 'utf-8', (err, data) => { // si no especificamos el coding data sera devuelto como Buffer (binario) no string
		if (err) {
			//res.writeHead(404)
			res.statusCode = 404;
			res.end(`<h1>Página no encontrada</h1>`)
		} else {

			let query = url.parse(req.url, true).query
			let name = query.name === undefined ? 'Anónimo' : query.name
			data = data.replace('{{name}}', name)
			res.end(data)
		}
	})


})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})