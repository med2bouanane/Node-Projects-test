
const clientService = require('../services/clientServiceRxjs'),
        Response = require('../services/responseRxjs'),
        Rx = require('rxjs/Rx')

let rech2 = {

    defMethod:function(data,cb){
        var app = this.app;


        
        Rx.Observable.fromPromise(clientService.connectDB(this,app,data))
                     .flatMap(query => {
                         let res= new Response(app,this,query)
                         return res.getResult()
                     })
                     .subscribe(response => {
                         cb(null, response)
                     },
                    err=>{
                        console.log(err)
                    })   
  
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