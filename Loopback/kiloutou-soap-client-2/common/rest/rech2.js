
const clientService = require('../services/clientService'),
        Response = require('../services/responseRxjs')

let rech2 = {

    defMethod:function(data,cb){
        var app = this.app;
        clientService.connectDB(this,app,data)
        .then(response => {
            let res= new Response(app,this,response)
            return res.getResult()
        })
        .then(response => 
            cb(null, response))
        .catch(err => console.log(err))    
    },
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