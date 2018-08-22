const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

/* GET users listing. */
router.get('/', contactController.getContact);

module.exports = router;
