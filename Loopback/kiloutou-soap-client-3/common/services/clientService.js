
const select = require('./select'),
        oracledb = require('oracledb'),
        config = require('../config'),
        Data = require('./data');

let clientService = class clientService{


    constructor(){}

    static connectDB(client,app,data){
        let promise = new Promise((resolve,reject)=>{
                oracledb.getConnection(
                {
                    user          : config.db.user,
                    password      : config.db.password,
                    connectString : config.db.connectString
                })
                .then(connection=> {
                    return connection.execute(
                        select.SELECT,[data._critereclient.Siret]
                    )
                    .then(result=> {
                        //console.log(result.metaData);
                        //console.log('result',result.rows.length);
                        resolve(result);

                        this.doRelease(connection);
                    })
                    .catch(function(err) {
                        console.log(err.message);
                        reject(err)
                        return connection.close();
                    });
                })
                .catch(function(err) {
                    console.error(err.message);
                });
        })
        return promise
    }




     static doRelease(connection)
    {
    connection.close(
        function(err) {
        if (err)
            console.error(err.message);
        });
    }



}

module.exports = clientService