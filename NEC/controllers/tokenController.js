const app = require('../app');
const logger = require('../helpers/logger')('NEC');
/**
 *  tokenController
 * 
 * @param {any} req the http request
 * @param {any} res the http response
 * @returns {Object} the token object
 */
const tokenController = (req, res) => {
  console.log('req.headers',req.headers);
  logger.info('tokenController',{req:req});
    const token = req.headers.kl_token;
    // saveToken
    app.kl_token = token;
    res.status(200).json({
      token: token,
    });
  };
  
  module.exports = tokenController;
  