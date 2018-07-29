const express = require('express');

const router = express.Router();
const users = require('./users');
const token = require('./token');
// const logger = require('./logger');
const logger = require('../helpers/logger')('NEC');

// router.use('*',logger);
router.use('/users',users);
router.use('/token',token);

/* GET home page. */
router.get('/', (req, res) => {
  // res.status(200).json({ message: 'Connected!' });
  logger.info('index.js',{req:req.statusCode});
  res.render('index', { title: 'KILOUTOU New Tech' });
});

module.exports = router;
