
const userService = require('../service/userService'),
        bcrypt = require('bcryptjs');

/**
 * The Business / Manager's Layer 
 * Process Business Logic 
 **/
let userConroller = class userConroller{

    /** 
     * constructor
     */
    constructor(){}
    
    /**
     * @param  { object } values
     * @param  { User } user
     */
    static signUp(values,user){

        let response,msg;
        let salt = bcrypt.genSaltSync(10)
        let passwordCrypted = bcrypt.hashSync(values.password,salt)
        let date = (new Date()).toString()

        let data = { 
            email: values.email, 
            password: passwordCrypted,
            displayName: values.displayName,
            avatar: values.avatar,
            signupDate: date,
            lastDate: date
         }

        let promise = new Promise((resolve,reject)=>{
                user.create(data,(err,user) => {
                if(err){
                    reject(err)
                    throw err;
                } 

                let token = userService.createToken(user);
                user.token = token;
                user.status = 200;
                msg = {"msg":"access OK."}; 
                response = user;
                console.log(`user: ${user.email} has been correctly created.`);
                resolve(response);
            })
        })
        return promise
    }

    
    /**
     * @param  { object } credentials
     * @param  { User } user
     */
    static signIn(credentials,user){
        let promise = new Promise((resolve,reject)=>{
            let response
            user.findOne({where: { email: credentials.email}},(err,user)=>{
                console.log(`USER---> ${user} , ${!user}`)
                if(!user || user.length <= 0 ){
                    resolve({"status":404,"message":"user not found."})
                }
                else if(!bcrypt.compareSync(credentials.password,user.password))
                    resolve({"status":401,"message":"User name or Password are wrong "})
                else if(err)
                    resolve({"status":500,"message":err})
                else{
                    let token = userService.createToken(user)
                    let msg = "access OK."
                    //let res = {"token":token , "message":"access OK."}
                    user.token = token
                    user.message = msg
                    user.status = 200
                    response = user
                    resolve(response)
                }
            })
        })
        return promise
    }
}
module.exports = userConroller