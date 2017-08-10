'use strict';
// const userService = require('../services/userService');
const userController = require('../controllers/userController'),
    app = require('../../server/server'),
    loopback = require('loopback'),
    userRest = require('./rest/userRest');

module.exports = function(User) {


    var verbs = ["patchOrCreate","create","replaceOrCreate","deleteById","replaceById","createChangeStream","updateAll","prototype.patchAttributes"]

    verbs.forEach(function(element) {
        User.disableRemoteMethodByName(element);
    });


    //** POST SignUp */
    User.signUp = userRest.signup
    User.remoteMethod('signUp', userRest.signUpRemote )

    //** POST SignIn */
    User.signIn = userRest.signIn
    User.remoteMethod('signIn', userRest.signInRemote);

};

