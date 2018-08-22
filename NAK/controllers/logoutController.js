const logoutService = require('../services/logoutService');
/**
 * revokeToken
 *
 * @param {Object} req the http request
 * @param {Object} res the http response
 * @returns {Object} the User object
 */
const revokeToken = (req, res) => {
  logoutService.revokeToken(req.headers.access_token)
    .then((result) => {
      if (result.statusCode && result.statusCode === 401) {
        res.status(401).json(result);
      } else {
        res.status(200).json(result);
      }
    });
};

module.exports = { revokeToken };
