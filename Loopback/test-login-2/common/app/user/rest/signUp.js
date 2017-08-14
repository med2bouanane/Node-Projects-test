
const userController = require('../controller/userController')

/** The Custom Rest Methods  */


//************ */
// POST SignUp
//*********** */

let signUp = {
    /**
     * @param  { object } data
     * @param  { function } cb - callback
     */
    defMethod: function(data,cb){
        
        userController.signUp(data,this)
        .then(response => cb(null, response))  
        .catch(err => {
            console.log(err)
            //throw err
        })
    },

    //const data2 = loopback.getModel('userInput')
    // {arg: 'credentials' , type: 'object',required: true, http: {source: 'body'} }
    remoteMethod:
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
}    

module.exports = signUp