const users = require('../models/user')

const getUsers = () => {
    // Get User from API Manager
    return users.USER;
};

const getUserByUserName = (name) => {
    // Get User from API Manager
    return users.USER;
};

module.exports = { getUsers, getUserByUserName };