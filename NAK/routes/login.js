const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

/* GET users listing. */
router.post('/', loginController.getToken);

module.exports = router;
