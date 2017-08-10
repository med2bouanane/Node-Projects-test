const userController = require('../../controllers/userController');

let userRest={
    //************ */
    // POST SignUp
    //*********** */
    signup: function(data,cb){
        
        userController.signUp(data,this)
        .then(response => cb(null, response))  
        .catch(err => {
            console.log(err)
            //throw err
        })
    },

    //const data2 = loopback.getModel('userInput')
    // {arg: 'credentials' , type: 'object',required: true, http: {source: 'body'} }
    signUpRemote:
        {
        accepts: [
            
            {arg: 'data', type: 'object', http: {source: 'body'}}
            ],
        http: {
            path: '/signUp',
            verb: 'post'
        },
        returns: [
            {arg: 'data',type: 'object', root: true}
            ]
        },

    //************ */    
    // POST SignIn   
    //*********** */ 
    signIn:function(credentials,cb){
        userController.signIn(credentials,this)
        .then(response => cb(null,response))
    },
    
    signInRemote:{
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
  
}

module.exports = userRest