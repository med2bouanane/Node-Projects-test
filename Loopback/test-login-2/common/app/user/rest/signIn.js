
const userController = require('../controller/userController')

let signIn = {
    /**
     * @param  { object } credentials
     * @param  { function } cb - callback
     */
    defMethod:function(credentials,cb){
        userController.signIn(credentials,this)
        .then(response => cb(null,response))
    },
    
    remoteMethod:{
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

module.exports = signIn