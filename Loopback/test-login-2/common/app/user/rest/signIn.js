
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
            {
                arg: 'credentials' , 
                type: '{"email":"string","password":"string"}',
                required: true, 
                http: {source: 'body'} 
            }
            ],
        http: {
            path: '/signin',
            verb: 'post'
        },
        returns: [
            {arg: 'credentials',type: '{"email":"string","password":"string"}', root: true}
            ]
        } 
}

module.exports = signIn