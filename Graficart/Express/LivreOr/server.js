const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

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
	secret:'miSesion',
	resave:false,
	saveUninitialized:true,
	cookie:{secure:false}
}))

// GET
app.get('/', (req, res) => {
	//res.send('Hola Mundo')
	console.log(req.session.error);
	// res.render('pages/index', {
	// 	test: 'Hola Mundo'
	// })

	if(req.session.error){
		res.locals.error = req.session.error
		req.session.error = undefined
	}
	res.render('pages/index')
})

// POST
app.post('/', (req, res) => {
	console.log(req.body);
	if (req.body.message === undefined || req.body.message === '') {
		//res.render('pages/index', {error: 'No se ha introducido ningún mensaje!!'})
		req.session.error='No se ha introducido ningún mensaje!!'
		res.redirect('/')
	}
})

app.listen(8080)