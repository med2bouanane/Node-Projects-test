var express = require('express'),
 	path = require('path'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser')

var index = require('./routes/index'),
	users = require('./routes/users')

var app = express()

// view engine setup
app
	.set('views', `${__dirname}/views`)
	.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	.use(logger('dev'))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(cookieParser())
	.use(express.static(`${__dirname}/public`))

	.use('/', index)
	.use('/users', users)

// catch 404 and forward to error handler
	.use(function(req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	})

// error handler
	.use(function(err, req, res, next) {
	  // set locals, only providing error in development
	  res.locals.message = err.message;
	  res.locals.error = req.app.get('env') === 'development' ? err : {};

	  // render the error page
	  res.status(err.status || 500);
	  res.render('error');
	})

module.exports = app;
