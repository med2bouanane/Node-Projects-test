const app = require('../app');

/**
 * isValidtoken
 *
 * @param {any} req the http request
 * @param {any} res the http response
 * @param {any} next the next middleware
 * @returns {Object} the message object about token status
 */
const isValidtoken = (req, res, next) => {
  if (!req.headers.kl_token || req.headers.kl_token !== app.kl_token) {
    return res.status(403).json({
      message: 'Invalid Token',
    });
  }
  next();
};

module.exports = { isValidtoken };
