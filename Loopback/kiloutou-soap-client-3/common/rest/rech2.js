
const clientService = require('../services/clientService'),
        Response = require('../services/wsWclientRech2Service'),
        Dao = require('../db/oracle/dao'),
        sql = require('../services/select')

let rech2 = {

    // Implementation of the business logic 
    defMethod:function(data,cb){
        var app = this.app;
        //clientService.connectDB(this,app,data)
        Dao.connectDB(sql.SELECT,data)
        .then(response => {
            let res= new Response(app,this,response)
            return res.getResult()
        })
        .then(response => 
            cb(null, response))
        .catch(err => console.log(err))    
    },
    // define the requiriment http hedears information for the /wswclientrech2 operation
    remoteMethod:{
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
}

module.exports = rech2