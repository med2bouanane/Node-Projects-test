'use strict';
// const userService = require('../services/userService');
const userController = require('../controllers/userController'),
    app = require('../../server/server'),
    loopback = require('loopback');

module.exports = function(User) {


    var verbs = ["patchOrCreate","create","replaceOrCreate","deleteById","replaceById","createChangeStream","updateAll","prototype.patchAttributes"]

    verbs.forEach(function(element) {
        User.disableRemoteMethodByName(element);
    });

    //var user = User.extend('User');
    User.signup = function (data,cb){
       
        userController.signUp(data,this)
        .then(response => cb(null, response))  
        .catch(err => {
            console.log(err)
            //throw err
        })
    };

    User.signIn = function(credentials,cb){
        userController.signIn(credentials,this)
        .then(response => cb(null,response))
    }


    //const data2 = loopback.getModel('userInput')
  // {arg: 'credentials' , type: 'object',required: true, http: {source: 'body'} }
  User.remoteMethod(
    
    'signup', 
    
    {
      accepts: [
          
          {arg: 'data', type: 'object', http: {source: 'body'}}
        ],
      http: {
        path: '/signup',
        verb: 'post'
      },
      returns: [
          {arg: 'data',type: 'object', root: true}
        ]
    }
  );


  User.remoteMethod(
    
    'signIn', 
    
    {
      accepts: [
          {arg: 'credentials' , type: 'object',required: true, http: {source: 'body'} }
        ],
      http: {
        path: '/signin',
        verb: 'post'
      },
      returns: [
          {arg: 'data',type: 'object', root: true}
        ]
    }
  );

};

