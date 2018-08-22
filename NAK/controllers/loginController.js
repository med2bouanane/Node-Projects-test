const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');
/**
 * getToken
 *
 * @param {Object} req the http request
 * @param {Object} res the http response
 * @returns {Object} the User object
 */
const getToken = (req, res) => {
const token = jwt.sign({ username : req.body.username, password : req.body.password }, 'topsecret');
jwt.verify(token,'topsecret',(err,decode) => {
  if(err){
    res.status(401).json(err);
  }
  else{
    res.status(200).json({payload : decode , token : token });
  }
});
  // loginService.getToken(req.body.username, req.body.password)
  //   .then((result) => {
  //     if (result.statusCode && result.statusCode === 401) {
  //       res.status(401).json(result);
  //     } else {
  //       res.status(200).json(result);
  //     }
  //   });
};

module.exports = { getToken };
