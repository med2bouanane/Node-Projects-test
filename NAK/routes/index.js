const express = require('express');

const router = express.Router();
const contact = require('./contact');
const login = require('./login');
const logout = require('./logout');
const logger = require('../middlewares/logger');

router.use('/login', logger, login);
router.use('/me', logger, contact);
router.use('/logout', logger, logout);

/* GET home page. */
router.get('/', logger, (req, res) => {
  res.render('index', { title: 'KILOUTOU New Tech' });
});

module.exports = router;
