
const userService = require('../services/userService'),
        bcrypt = require('bcryptjs');

let userConroller = class userConroller{

    constructor(){}

    static signUp(values,user){

        let response,msg;
        let salt = bcrypt.genSaltSync(10)
        let passwordCrypted = bcrypt.hashSync(values.password,salt)
        console.log(`passwordCrypted. ${passwordCrypted} `)
        let date = new Date()
        let data = { 
            email: values.email, 
            password: passwordCrypted,
            displayName: values.displayName,
            avatar: values.avatar
         }
         console.log(`data. ${data} `)
        let promise = new Promise((resolve,reject)=>{
                user.create(data,(err,user) => {
                if(err){
                    reject(err)
                    throw err;
                } 

                let token = userService.createToken(user);
                user.token = token;
                msg = {"msg":"access OK."}; 
                response = user;
                console.log(`user: ${user.email} has been correctly created.`);
                resolve(response);
            })
        })
        return promise
    }

    static signIn(credentials,user){
        let promise = new Promise((resolve,reject)=>{
            let response
            user.findOne({where: { email: credentials.email}},(err,user)=>{
                console.log(`USER---> ${user} , ${!user}`)
                if(!user || user.length <= 0 ){
                    resolve({"status":404,"message":"user not found."})
                }
                else if(!bcrypt.compareSync(credentials.password,user.password))
                    resolve({"status":500,"message":"Error passwore "})
                else if(err)
                    resolve({"status":500,"message":err})
                else{
                    let token = userService.createToken(user)
                    let msg = "access OK."
                    //let res = {"token":token , "message":"access OK."}
                    user.token = token
                    user.message = msg
                    response = user
                    resolve(response)
                }
            })
        })
        return promise
    }
}
module.exports = userConroller