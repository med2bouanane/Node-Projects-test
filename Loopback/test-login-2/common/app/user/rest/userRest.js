const signIn = require('./signIn'),
    signUp = require('./signUp');

/** The Custom Rest Methods  */

let userRest={
    //************ */
    // POST SignUp
    //*********** */
    signup: signUp.defMethod,
    signUpRemote:signUp.remoteMethod,
    //************ */    
    // POST SignIn   
    //*********** */ 
    signIn:signIn.defMethod,
    signInRemote:signIn.remoteMethod 
  
}

module.exports = userRest