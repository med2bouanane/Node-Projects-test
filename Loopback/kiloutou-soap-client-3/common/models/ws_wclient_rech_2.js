'use strict';
const oracledb = require('oracledb'),
        config = require('../config'),
        clientRest = require('../rest/clientRest'),
        WsWclientRech2Rest = require('../rest/WsWclientRech2Rest');

/**
 * this module implement the http methods to expose the Data Transfer Object Wswclientrech2  
 * @module Wswclientrech2DTO
 */

/**
 * The definition type of the Wswclientrech2 Model is defined in {@link ws_wclient_rech_2.json} file
 * @param  {Wswclientrech2} Wswclientrech2 - Wswclientrech2 model
 */        
module.exports = function(Wswclientrech2) {

    /**
     * Disable all default methods operations provided by LoopBack’s standard model REST API
     */
    config.desableAllMethods(Wswclientrech2)
    /** 
    * POST: /wswclientrech2 
    */
    // Define the method "wswclientrech2" to be exposed over a REST endpoint
    Wswclientrech2.wswclientrech2 = WsWclientRech2Rest.wswclientrech2
    // Define hedears of the remoteMethod
    Wswclientrech2.remoteMethod('wswclientrech2', WsWclientRech2Rest.wswclientrech2Remote)
};


