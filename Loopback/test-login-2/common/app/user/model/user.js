'use strict';
// const userService = require('../services/userService'),
    //app = require('../../server/server'),
    //loopback = require('loopback'),;
const userRest = require('../rest/userRest'),
      config = require('../../../../config'),
      auth = require('../../../../server/middleware/auth');
/**
 * The User Model
 * @param  {user} User - user model
 */
module.exports = function(User) {


    /** Enable some Methods */
    config.enableMethods(User,["find","findById","create","deleteById"])

    /** Before Method */
    auth.allowMethod(User,['signUp','signIn'])

    /** 
    * POST SignUp 
    */
    User.signUp = userRest.signup
    User.remoteMethod('signUp', userRest.signUpRemote )

    /** 
     * POST SignIn 
     */
    User.signIn = userRest.signIn
    User.remoteMethod('signIn', userRest.signInRemote);

};

