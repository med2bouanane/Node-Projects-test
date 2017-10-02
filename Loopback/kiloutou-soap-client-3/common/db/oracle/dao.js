
const oracledb = require('oracledb'),
config = require('../../config');

/** Class Dao layer that allow connect/disconnect to database and execute the sql queries */
let Dao = class{


/**
 * Creates an instance of dao.
 * @constructor
 */
constructor(){}

/**
 * this method allow this sequential sequence: 
 *  - connect to database
 *  - execute the sql query
 *  - finally disconnect to database
 * 
 * @static
 * @param {string} sql - the sql query 
 * @param {object} data - the data to mapped in the sql query 
 * @param {string} option - the optional parameter 
 * @returns {Promise} - result of the query
 */
static connectDB(sql,data,option){
let promise = new Promise((resolve,reject)=>{
        // connection to database
        // oracledb.getConnection(
        // {
        //     user          : config.db.user,
        //     password      : config.db.password,
        //     connectString : config.db.connectString
        // })
        // // Execute the query
        // .then(connection=> {
        //     return connection.execute(
        //         sql,[data._critereclient.Siret]
        //     )
        //     .then(result=> {
        //         //console.log(result.metaData);
        //         //console.log('result',result.rows.length);
        //         resolve(result);

        //         this.doRelease(connection);
        //     })
        //     .catch(function(err) {
        //         console.log(err.message);
        //         reject(err)
        //         return connection.close();
        //     });
        // })
        // .catch(function(err) {
        //     console.error(err.message);
        // });
        resolve(config.result)
})
return promise
}




/**
 * Disconnected to database
 * 
 * @static
 * @param {object} connection - connection object 
 */
static doRelease(connection)
{
connection.close(
function(err) {
if (err)
    console.error(err.message);
});
}



}

/**
 * Dao layer Module that connect/disconnect to database and execute the query
 * @module Dao
 */
module.exports = Dao