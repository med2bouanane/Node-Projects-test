const userService = require('../services/userService')

const getUsers = (req, res) => {
  res.status(200).json(userService.getUsers());
};

const getUserByUserName = (req, res) => {
  res.status(200).json(userService.getUserByUserName(req.params.name));
};

module.exports = { getUsers , getUserByUserName};
