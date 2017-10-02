
const rech2 = require('./rech2Rxjs')
let clientRest={
    //************ */
    // POST wswclientrech2
    //*********** */
    rech2: rech2.defMethod,
    rech2Remote:rech2.remoteMethod
}

module.exports = clientRest