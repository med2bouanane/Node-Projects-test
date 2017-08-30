
const _ = require('lodash');
const config = {
    PORT: process.env.PORT || '3000',
    DB: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    SECRET_TOKEN: 'mySecretToken',
    // List of Remote Methode to disable
    METHODS : [
        "exists",                       // => GET       /resource/:id/exists
        "findById",                     // => GET       /resource/:id
        "find",                         // => GET       /resource
        "findOne",                      // => GET       /resource/findOne
        "count",                        // => GET       /resource/count

        "create",                       // => POST      /resource
        "createChangeStream",           // => POST      /resource/change-stream
        "updateAll",                    // => POST      /resource/update
        "upsertWithWhere",              // => POST      /resource/upsertWithWhere

        "replaceOrCreate",              // => PUT       /resource
        "replaceById",                  // => PUT       /resource/:id

        "deleteById",                   // => DELETE    /resource/:id

        "patchOrCreate",                // => PATCH     /resource
        "prototype.patchAttributes",    // => PATCH     /resource/:id
        
        
        ],
    desableAllMethods: model => {
                config.METHODS
                .forEach(element => {
                    model.disableRemoteMethodByName(element)
                })},
    desableMethods: (model,methods) => {
                methods.forEach(element => {
                    model.disableRemoteMethodByName(element)
                })
    },            
    enableMethods: (model,methodsEnable) => {
        let methods = config.METHODS;
        desables = _.difference(methods,methodsEnable) // devuelve los parametros que esten en methods y que no esten en methodsEnable
                                                       // _.difference([1,2],[2,3]) ==> [1]  
        config.desableMethods(model,desables)
    }            
}


module.exports = config