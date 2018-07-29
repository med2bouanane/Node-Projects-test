const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

/* GET users listing. */
router.get('/', auth.isValidtoken, userController.getUsers);

router.get('/:userName', auth.isValidtoken, userController.getUserByUserName);

module.exports = router;
