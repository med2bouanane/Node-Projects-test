'use strict'

const express = require('express'),
	  router = express.Router(),
	  RestController = require('../controllers/restController')



router.get('/users',RestController.getUsers)
router.post('/users',RestController.setUser)

module.exports = router