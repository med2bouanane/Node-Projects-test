const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const hostname = '127.0.0.1'
const port = 8080

let app = express()

app.set('view engine', 'ejs') // Especificamos el motor de vistas a usar (ejs)

// Middelwars
app.use('/assets', express.static('public')) // Le indicamos a express que los ficheros estáticos cuelgan de la carpeta public
	// y para acceder a ellos desde la url tiene que ser con el path /assets delate
	// http://localhost:8080/assets/semantic/semantic.min.css

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(session({
	secret: 'miSesion',
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false
	}
}))

app.use(require('./middlewares/flash'))

// GET
app.get('/', (req, res) => {
	console.log(req.session);
	res.render('pages/index')
})

// POST
app.post('/', (req, res) => {
	console.log(req.body);
	if (req.body.message === undefined || req.body.message === '') {
		req.flash('error', 'No se ha introducido ningún mensaje!!')
		res.redirect('/')
	} else {

	}
})

app.listen(port, () => {
	console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
})