const express = require('express');
const logger = require('../helpers/logger')('NEC');

const router = express.Router();

router.all('*', (req,res,next)=>{
    logger.info('Incoming request',{method:req.method});
    return next();
});

module.exports = router;
