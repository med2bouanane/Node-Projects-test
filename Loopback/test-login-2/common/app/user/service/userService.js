
const moment = require('moment'),
        jwt = require('jsonwebtoken'),
        config = require('../../../../config');

/** third-party's layer  */

let userService = class userService{        

    constructor(){}
    static createToken(user){
        const payload = { // Datos con los que vamos a construir el TOKEN
        sub: user.email,
        iat: moment().unix(), // fecha de creación del token
        exp: moment().add(14, 'days').unix() //fecha de expiración del token
        }

        return jwt.sign(payload, config.SECRET_TOKEN) // Codificar (Crear) el token con la clave secreta
    }

    static decodeToken(token){

        
    }
}

module.exports = userService