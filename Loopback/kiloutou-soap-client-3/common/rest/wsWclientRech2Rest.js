
const clientService = require('../services/clientService'),
        WsWclientRech2Service = require('../services/wsWclientRech2Service'),
        Dao = require('../db/oracle/dao'),
        sql = require('../services/select')
/**
 * The http headers information for the /wswclientrech2 operation
 * @namespace
 */
let _remoteMethod={
        accepts: [
            {
                arg: 'WS_WCLIENT_RECH_2' , 
                type: 'WS_WCLIENT_RECH_2',
                required: true, 
                http: {source: 'body'} 
            }
            ],
        http: {
            path: '/wswclientrech2',
            verb: 'post'
        },
        returns: [
            {arg: 'WS_WCLIENT_RECH_2Result',type: 'WS_WCLIENT_RECH_2'}
            ]
    }

/**  
* WsWclientRech2Rest Class that expose the wsWclientRech2 resource
*/    
let WsWclientRech2Rest = class{
  
    /**
     * Creates an instance of WsWclientRech2Rest.
     * @constructor
     */
    constructor(){}

    /**
     * Register the remote method of the wswclientrech2 model, exposed over the REST endpoint /wswclientrech2
     * @param  {object} data - data to be passed to the query
     * @param  {function} cb - the callback function
     * @returns {object} response - the json response of the request
     */
    static wswclientrech2(data,cb){
        var app = this.app;
        //clientService.connectDB(this,app,data)
        Dao.connectDB(sql.SELECT,data)
        .then(response => {
            let res= new WsWclientRech2Service(app,this,response)
            return res.response()
        })
        .then(response => 
            cb(null, response))
        .catch(err => console.log(err))    
    }
    /**
     * specifies parameters to configure the REST endpoint
     * defining the required http headers information for the /wswclientrech2 operation
     * @returns the headers information of the exposed operation
     */
    static get wswclientrech2Remote(){
        return _remoteMethod
    }
}
/**
 * WsWclientRech2Rest Module that expose the wsWclientRech2 resource.
 * Register the remote method. 
 * And specifies parameters to configure the REST endpoint
 * @module WsWclientRech2Rest
 */
module.exports = WsWclientRech2Rest