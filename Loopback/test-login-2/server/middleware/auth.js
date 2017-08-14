
const jwt = require('jsonwebtoken'),
    config = require('../../config'),
    _ = require('lodash');

/**
 * Class Authentication 
 * Before Remote
 */
let auth = class Auth{


    constructor(){}

    /**
     * verify the token
     * @param  { object } ctx
     * @return { Promise } promise
     */
    static verifyToken(ctx){

        let promise = new Promise((resolve,reject) =>{
            let response

            if (!ctx.req.headers.authorization) {
                response = {message: 'Access Denied', status: 403}
                reject(response)
            }
            const token = ctx.req.headers.authorization.split(" ")[1]
            console.log(`TOKEN: ${token}`)
            
            jwt.verify(token, config.SECRET_TOKEN,(err,decoded) => {
                response = decoded
                if(err){

                    response = {message: err, status: 500}
                    reject(response)
                }
            
                resolve(response)
            })
        })
        return promise

    }
    /**
     * verify the authentication before any methods http
     * @param  { Model } model
     */
    static beforAny(model){

        model.beforeRemote('*',(ctx,unused,next) => {

        this.verifyToken(ctx)
            .then(response => {
                next()
            })
            .catch(response => {
                return ctx.res.status(response.status).json(response)
                throw response.message
            })

        })
    }
    /**
     * verify the authentication before methods http that are into the methods array
     * @param  { Model } model
     * @param  { Array } methods
     */
    static beforSome(model,methods){

        methods.forEach((element)=> {
            model.beforeRemote(element,(ctx,unused,next) => {
            
            this.verifyToken(ctx)
                .then(response => {
                    next()
                })
                .catch(response => {
                    return ctx.res.status(response.status).json(response)
                    throw response.message
                })

            })
        });
        
    }
     /**
      * allow access for the methods http that are into the methods array
      * @param  { Model } model
      * @param  { Array } methods
      */
     static allowMethod(model,methods){

         let all = config.METHODS
         let denieds = _.difference(all,methods)
         this.beforSome(model,denieds)
        
    }
}

module.exports = auth

