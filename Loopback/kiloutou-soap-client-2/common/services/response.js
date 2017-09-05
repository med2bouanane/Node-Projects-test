
const Data = require('./data'),
        select = require('./select');


let response = class response{

    constructor(app,client,result){
        this.client = client
        this.result = result
        this.app = app
    }


    getResult(){

        let promise = new Promise((resolve,reject)=>{

        let enumMetadataResult = select.linkMetadataTag(this.result.metaData)
        let rows_pos_enum = select.getResultEnum(this.result)

        //if(this.result && this.result.rows && this.result.rows.length>0 ){
        let data = new Data(this.result,rows_pos_enum)

        let fiche_obj = data.fiche()
        let address_obj = data.address()
        let critereclient_obj = data.critereclient()
        let communicationsClient_obj = data.communicationsClient()  
        let cookie = {COOKIE_F903KY:"128612449"}    
        

        this.createWClient(cookie)
        .then(response=>{
            this.createcritereclient(critereclient_obj)
            .then(responseCriter=>{
                response.critereclient.create(responseCriter,(err,criter)=>{})
            })
            .then(responseCriter=>{
                this.createClient(fiche_obj,address_obj,communicationsClient_obj)
                .then(responseClient=>{
                    response.clients.create(responseClient,(err,c)=>{
                        resolve(response)
                    })
                })
                
            })
        })
    })
    return promise
    }


    createWClient(cookie){
        let promise = new Promise((resolve,reject)=>{
            this.client.create(cookie,(err,ws) => {
                resolve(ws)
                reject(err)
            })
        })
        return promise
    }

    createcritereclient(critereclient_obj){
        let promise = new Promise((resolve,reject)=>{
            var critereclient = this.app.models.CritereClient
            critereclient.create(critereclient_obj,(err,critereclient)=>{
                resolve(critereclient)
                reject(err)
            })
        })
        return promise
    }

    createClient(fiche_obj,address_obj,communicationsClient_obj){
        let promise = new Promise((resolve,reject)=>{
            this.createEmptyClient()
            .then(response=>{
                this.createFicheClient(fiche_obj)
                .then(responseFiche=>{
                    response.ficheClient.create(responseFiche,(err,fc)=>{})
                })
                .then(responseFiche=>{
                    this.createAdresseClient(address_obj)
                    .then(responseAddress=>{
                        response.adresseClient.create(responseAddress,(err,address)=>{})
                    })
                })
                .then(responseAddress=>{
                    this.createCommunicationsClient(communicationsClient_obj)
                    .then(responseCC=>{
                        response.CommunicationsClients.create(responseCC,(err,cc)=>{
                            resolve(response)
                        })
                    })
                })
            })
        })
        return promise    
    }

    createEmptyClient(){
        let promise = new Promise((resolve,reject)=>{
            var client = this.app.models.Client
            client.create((err,client)=>{
                resolve(client)
                reject(err)
            })
        })
        return promise    
    }

    createFicheClient(fiche_obj){
        let promise = new Promise((resolve,reject)=>{
            var fiche = this.app.models.FicheClient
            fiche.create(fiche_obj,(err,fiche)=>{
                resolve(fiche)
                reject(err)
            })
        })
        return promise
    }

    createAdresseClient(address_obj){
        let promise = new Promise((resolve,reject)=>{
            var address = this.app.models.AdresseClient
            address.create(address_obj,(err,address)=>{
                resolve(address)
                reject(err)
            })
        })
        return promise
    }
    createCommunicationsClient(communicationsClient_obj){
        let promise = new Promise((resolve,reject)=>{
            var communicationsClient = this.app.models.CommunicationsClient
            communicationsClient.create(communicationsClient_obj,(err,cc)=>{
                resolve(cc)
                reject(err)
            })
        })
        return promise
    }

    
    


}

module.exports = response