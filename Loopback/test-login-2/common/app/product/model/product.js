'use strict';

const config = require('../../../../config'),
    auth = require('../../../../server/middleware/auth');

module.exports = function(Product) {

    /** Desable All Methods */
    config.enableMethods(Product,["find","findById","create","deleteById"])

    /**
     * BEFORE REMOTE (HOOK) 
     * must authentication befor any transaction 
     * */
    auth.beforAny(Product)
    //auth.beforSome(Product,['create'])
    //auth.allowMethod(Product,['find'])

};
