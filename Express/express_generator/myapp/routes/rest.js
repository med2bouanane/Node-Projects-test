const express = require('express'),
	router = express.Router(),
	RestController = require('../controllers/rest');

/* GET home page. */
router.get('/users', RestController.getUsers)

router.post('/users', RestController.setUser)

module.exports = router;