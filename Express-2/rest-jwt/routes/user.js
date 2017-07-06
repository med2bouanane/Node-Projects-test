'use strict'

const express = require('express'),
	router = express.Router(),
	userController = require('../controllers/userController'),
	authMiddleware = require('../middlewares/auth')




router.post('/signup', userController.signUp)

router.post('/signin', userController.signIn)	

module.exports = router