
const select = require('./select'),
        oracledb = require('oracledb'),
        config = require('../config'),
        Data = require('./data'),
        Rx = require('rxjs/Rx');

let clientService = class clientService{


    constructor(){}

    static connectDB(client,app,data){
               return oracledb.getConnection(
                   // Data Access
                {
                    user          : config.db.user,
                    password      : config.db.password,
                    connectString : config.db.connectString
                })
                .then(connection=> {
                    // Execute Query
                    return connection.execute(
                        select.SELECT,[data._critereclient.Siret]
                    )
                    .then(result=> {
                        // result Query (this is a Promise)
                        return result
                        this.doRelease(connection);
                    })
                    .catch(function(err) {
                        console.log(err.message);
                        return connection.close();
                    });
                })
                .catch(function(err) {
                    console.error(err.message);
                });
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