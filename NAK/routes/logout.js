const express = require('express');
const logoutController = require('../controllers/logoutController');

const router = express.Router();

/* GET users listing. */
router.post('/', logoutController.revokeToken);

module.exports = router;
