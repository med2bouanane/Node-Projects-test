'use strict';
const oracledb = require('oracledb'),
        config = require('../config'),
        clientRest = require('../rest/clientRest');
module.exports = function(Wswclientrech2) {


    config.desableAllMethods(Wswclientrech2)
    /** 
    * POST wswclientrech2 
    */
    Wswclientrech2.wswclientrech2 = clientRest.rech2
    Wswclientrech2.remoteMethod('wswclientrech2', clientRest.rech2Remote )
};






























// config.desableAllMethods(Wswclientrech2)

// Wswclientrech2.wswclientrech2 = function(data,cb){
//     var app = Wswclientrech2.app;
//     connectDB(Wswclientrech2,app,data)
//     .then(response => 
//         cb(null, response))
//     .catch(err => console.log(err))    
// }

// Wswclientrech2.remoteMethod('wswclientrech2',{
//      accepts: [
//             {
//                 arg: 'WS_WCLIENT_RECH_2' , 
//                 type: 'WS_WCLIENT_RECH_2',
//                 required: true, 
//                 http: {source: 'body'} 
//             }
//             ],
//         http: {
//             path: '/wswclientrech2',
//             verb: 'post'
//         },
//         returns: [
//             {arg: 'WS_WCLIENT_RECH_2Result',type: 'WS_WCLIENT_RECH_2'}
//             ]
        
// })


// let _ficheClient = {
//     IsActif:"true",
// };
// let ws = {
//     COOKIE_F903KY:"dasfda",
//     Region:"",
//     critereclient:{},
//     clients:[{
//         ficheClient:_ficheClient,
//         adresseClient:{},
//         communicationsClients:[]
//         }
//     ]

// };



// let connectDB = function(model,app,data){
//     let res;
// console.log('data.critereclient.Siret',data._critereclient.Siret)
//     let promise = new Promise((resolve,reject)=>{
//                 oracledb.getConnection(
//                 {
//                     user          : "DEV",
//                     password      : "dev",
//                     connectString : "FRKILPRO7002:2115/LOCD"
//                 })
//                 .then(connection=> {
//                     return connection.execute(
//                         _select,[data._critereclient.Siret]
//                     )
//                     .then(result=> {
//                         console.log(result.rows)
//                     //if(result && result.rows && result.rows.length>0 ){
//                     let fiche_obj = {
//                         CodeClient : result.rows[0][3],
//                         NumeroTVAIntracommunautaire : result.rows[0][4],
//                         ISACTIF : result.rows[0][8],
//                         LASTMODIF:result.rows[0][9],
//                         StatutEconomique:result.rows[0][10],
//                         UNIKCALL:result.rows[0][11],
//                         EXTRANET:result.rows[0][12],
//                         TYPECLIENT:result.rows[0][13],
//                         StatutEconomique:result.rows[0][15],
//                         InfoChantier:{
//                             CAFacture : result.rows[0][2]
//                         }
//                     }

//                     let address_obj = {
//                         Numero_et_rue :result.rows[0][16],
//                         MentionSpeciale :result.rows[0][17],
//                         ComplementAdresse :result.rows[0][18],
//                         ComplementNom :result.rows[0][19],
//                         Codepostal :result.rows[0][20],
//                         localite :result.rows[0][21],
//                         Pays :result.rows[0][22]
//                     }

//                     let critereclient_obj = {siret: result.rows[0][5]} ;
//                     let communicationsClient_obj = {Value: result.rows[0][24],Nature:result.metaData[24].name}
                        
//                     var communicationsClient = app.models.CommunicationsClient
//                     communicationsClient.create(communicationsClient_obj,(err,cc)=>{
//                         console.log('cc',cc + 'err '+err )
//                     })


//                         model.create({COOKIE_F903KY:"128612449"},(err,ws) => {
//                             //client.nestRemoting(clients)

//                             var fiche = app.models.FicheClient;
//                             fiche.create(fiche_obj,(err,f)=> {

//                                 var address = app.models.AdresseClient
//                                 address.create(address_obj,(err,address)=>{
//                                     var client = app.models.Client;
//                                     client.create((err,c)=>{
//                                         c.ficheClient.create(f,(err,fc)=>{
//                                             })
//                                         c.adresseClient.create(address,(err,ac)=>{
                                            
//                                         })
//                                         var communicationsClient = app.models.CommunicationsClient
//                                         communicationsClient.create(communicationsClient_obj,(err,cc)=>{
//                                             //console.log('cc',cc + 'err '+err )
//                                             c.CommunicationsClients.create(cc,(err,p)=>{
//                                                 var critereclient = app.models.CritereClient
//                                                 critereclient.create(critereclient_obj,(err,critereC)=>{
//                                                     ws.critereclient.create(critereC,(err,res)=>{
//                                                         ws.clients.create(c,(err,res)=> {
//                                                             //console.log('ws',ws)
//                                                             console.log('res',res + ' err ' + err)
//                                                             resolve(ws);
//                                                         })
//                                                     })
//                                                 })
                                                
//                                             })
//                                         }) 
                                        
//                                     })
//                                 })
                                
//                             })
                            
//                         })
//                     //}
//                         //console.log(result.metaData);
//                         //console.log('result',result.rows.length);
//                         // resolve(result);

//                         doRelease(connection);
//                     })
//                     .catch(function(err) {
//                         console.log(err.message);
//                         reject(err)
//                         return connection.close();
//                     });
//                 })
//                 .catch(function(err) {
//                     console.error(err.message);
//                 });
//         })
//         return promise

// };



// function doRelease(connection)
// {
//   connection.close(
//     function(err) {
//       if (err)
//         console.error(err.message);
//     });
// }

// var _select= 
// `SELECT /* WSClientRecherche $Revision: 1.11 $ */
//  V1.K050050COM AS W2,
//  (SELECT (SELECT F2.F050NOM FROM F050TIERS F2 WHERE F2.F050KY = F1.F050GROUPE) AS F050NOM
//     FROM F050TIERS F1
//    WHERE F1.F050KY = V1.K050050COM) AS F050GROUPE,
//  0.0 CAFacture,
//  V1.F050KY AS F050KY,
//  V1.F050TVAI AS F050TVAI,
//  V1.F050NOM || ' ' || V1.F050PRENOM AS F050NOMPRE,
//  V1.F050DIRECT AS F050DIRECT,
//  V1.F050SIGLE AS F050SIGLE,
//  DECODE(V1.F050ACTIF, '1', 'true', '2', 'false', 'Non Disponible') AS ISACTIF,
//  (SELECT DECODE(MAX(F900DATE),
//                 NULL,
//                 NULL,
//                 TO_CHAR(CAST(MAX(F900DATE) AS TIMESTAMP) AT TIME ZONE 'UTC',
//                         'yyyy-mm-dd"T"HH24:MI:SS"Z"')) AS LASTMODIFICATION
//     FROM F900WOPETIERS
//    WHERE F900TABLE = 'F050TIERS'
//      AND F900ENREG = F050KY) AS LASTMODIF,
//  (select NVL(TO_CHAR(Max(F901msg)), 'NON DISPONIBLE')
//     from vt95typ
//    where ft95filtre1 = 'STATUTCDA'
//      and FT95KY = F050CDASTAT) AS STATUTECO,
//  DECODE((SELECT 1
//           FROM F05ZTYPE
//          WHERE K05Z050TIE = F050KY
//            AND K05ZT05TYP = 'KGS'
//            AND ROWNUM = 1),
//         1,
//         'true',
//         'false') AS UNIKCALL,
//  DECODE((SELECT K05ZT05TYP
//           FROM F05ZTYPE
//          WHERE F05ZTYPE.K05ZT05TYP IN ('PART', 'ENTR')
//            AND F05ZTYPE.K05Z050TIE = F050KY),
//         'ENTR',
//         '1',
//         '0') AS EXTRANET,
//  DECODE(V1.TYPECLIENT, 'ENTR', 'E', 'PART', 'P', 'KIL', 'K', V1.TYPECLIENT) AS TYPECLIENT,
//  NVL((SELECT 'GCPT'
//        FROM F05ZTYPE
//       WHERE F05ZTYPE.K05Z050TIE = V1.K050050COM
//         AND F05ZTYPE.K05ZT05TYP = 'GCPT'
//         AND ROWNUM = 1),
//      NVL((SELECT 'NAT'
//            FROM F05ZTYPE
//           WHERE F05ZTYPE.K05Z050TIE = V1.K050050COM
//             AND F05ZTYPE.K05ZT05TYP = 'CN'
//             AND ROWNUM = 1),
//          NVL((SELECT 'REG'
//                FROM FWPROPENT
//               WHERE FWPROPENT.KWPROPENT050TIE = V1.K050050COM
//                 AND FWPROPENT.KWPROPENTT63STATU = 'PROP_ACT'
//                 AND FWPROPENT.FWPROPENTREGION = ''),
//              (SELECT 'CPRO'
//                 FROM F150CARTE
//                WHERE F150CARTE.K150050CLT = V1.K050050COM
//                  AND F150CARTE.K150T17TYP = '14'
//                  AND F150CARTE.F150ACTIF = '1')))) AS TRFNEG,
//  NVL((SELECT SUBSTR(F05ZTYPE.K05ZT05TYP, 1, 1)
//        FROM F05ZTYPE
//       WHERE F05ZTYPE.K05Z050TIE = V1.F050KY
//         AND (F05ZTYPE.K05ZT05TYP = 'VALIDK' OR
//             F05ZTYPE.K05ZT05TYP = 'CERTIF')
//         AND ROWNUM = 1),
//      '') AS STATUT,
//  V1.F020ADRES1 AS F020ADRES1,
//  V1.F020ADRES2 AS F020ADRES2,
//  V1.F020ADRES3 AS F020ADRES3,
//  V1.F020ADRES4 AS F020ADRES4,
//  V1.F020CP AS F020CP,
//  V1.F020VILLE AS F020VILLE,
//  V1.PAYS AS PAYS,
//  DECODE(V1.K050TI8FAM, '1', V1.F050CODE, '2', V1.F050SIREN) AS F050CODE,
//  V1.TELEPHONE AS TELEPHONE,
//  V1.CARTEFID AS CARTEFID,
//  DECODE(V1.F050ACTIF, '1', 'O', '2', 'N') AS CL_ACTIF,
//  V1.F050CDASTAT AS F050CDASTAT
//   FROM (SELECT (SELECT 1
//                   FROM F05ZTYPE
//                  WHERE F05ZTYPE.K05Z050TIE = F050TIERS.F050KY
//                    and k05Zt05typ = 'CDA'
//                    AND ROWNUM = 1) AS CDA,
//                F050TIERS.F050KY AS F050KY,
//                F050TIERS.F050TVAI AS F050TVAI,
//                F050TIERS.K050TI8FAM AS K050TI8FAM,
//                F050TIERS.F050NOM AS F050NOM,
//                F050TIERS.F050PRENOM AS F050PRENOM,
//                F050TIERS.F050DIRECT AS F050DIRECT,
//                F050TIERS.F050SIGLE AS F050SIGLE,
//                F050TIERS.K050TI8SFAM AS TYPECLIENT,
//                (SELECT F020ADR.F020ADRES1
//                   FROM F020ADR
//                  WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020ADRES1,
//                (SELECT F020ADR.F020ADRES2
//                   FROM F020ADR
//                  WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020ADRES2,
//                (SELECT F020ADR.F020ADRES3
//                   FROM F020ADR
//                  WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020ADRES3,
//                (SELECT F020ADR.F020ADRES4
//                   FROM F020ADR
//                  WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020ADRES4,
//                (SELECT F020ADR.F020CP
//                   FROM F020ADR
//                  WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020CP,
//                (SELECT F020ADR.F020VILLE
//                   FROM F020ADR
//                  WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020VILLE,
//                (SELECT F901MSG
//                   FROM VT53CTY, F020ADR
//                  WHERE FT53KY = K020T53CTY
//                    AND F020ADR.F020KY = F050TIERS.K050020ADR) AS PAYS,
//                F050TIERS.F050CODE AS F050CODE,
//                F050TIERS.F050SIREN AS F050SIREN,
//                F050TIERS.K050050COM AS K050050COM,
//                (SELECT F022MCOM.F022NUM
//                   FROM F022MCOM
//                  WHERE F022MCOM.F022NNNKY = F050TIERS.F050KY
//                    AND F022MCOM.T022022LIE = '050'
//                    AND ((F022MCOM.K022T22TYP = '2') OR
//                        (F022MCOM.K022T22TYP = '6') OR
//                        (F022MCOM.K022T22TYP = '1' AND NOT EXISTS
//                         (SELECT 1
//                             FROM F022MCOM A
//                            WHERE A.F022NNNKY = F022MCOM.F022NNNKY
//                              AND A.K022T22TYP = '6')) OR
//                        (F022MCOM.K022T22TYP = '3' AND NOT EXISTS
//                         (SELECT 1
//                             FROM F022MCOM A
//                            WHERE A.F022NNNKY = F022MCOM.F022NNNKY
//                              AND A.K022T22TYP IN ('1', '6'))) OR
//                        (F022MCOM.K022T22TYP = '4' AND NOT EXISTS
//                         (SELECT 1
//                             FROM F022MCOM A
//                            WHERE A.F022NNNKY = F022MCOM.F022NNNKY
//                              AND A.K022T22TYP IN ('1', '6', '3'))) OR
//                        (F022MCOM.K022T22TYP = '5' AND NOT EXISTS
//                         (SELECT 1
//                             FROM F022MCOM A
//                            WHERE A.F022NNNKY = F022MCOM.F022NNNKY
//                              AND A.K022T22TYP IN ('1', '6', '3', '4'))))
//                    AND ROWNUM = 1) AS TELEPHONE,
//                F050TIERS.F050ACTIF AS F050ACTIF,
//                (SELECT 'X'
//                   FROM F150CARTE
//                  WHERE F150CARTE.K150T17TYP = '8'
//                    AND F150CARTE.F150ACTIF = '1'
//                    AND F150CARTE.K150050CLT = F050TIERS.F050KY
//                    AND ROWNUM = 1) AS CARTEFID,
//                (SELECT VT95TYP.F901MSG
//                   FROM VT95TYP
//                  WHERE VT95TYP.FT95FILTRE1 = 'STATUTCDA'
//                    AND VT95TYP.FT95KY = F050TIERS.F050CDASTAT) AS F050CDASTAT
//           FROM (SELECT F050KY,
//                        F050TVAI,
//                        K050TI8FAM,
//                        F050NOM,
//                        F050PRENOM,
//                        F050DIRECT,
//                        K050TI8SFAM,
//                        K050020ADR,
//                        F050CODE,
//                        F050SIREN,
//                        F050TIERS.K050050COM,
//                        F050ACTIF,
//                        F050SIGLE,
//                        F050CDASTAT
//                   FROM F050TIERS,
//                        (SELECT /*+INDEX (F,F050TIERS_IDX_002) */
//                         DISTINCT F.K050050COM
//                           FROM F050TIERS F
//                          WHERE ROWNUM <= 200
//                            AND F.F050CODE = :siret
//                            AND (EXISTS (SELECT 1
//                                           FROM F05ZTYPE
//                                          WHERE K05Z050TIE = F.K050050COM
//                                            AND K05ZT05TYP = 'ENTR'))) F
//                  WHERE ROWNUM <= 200
//                    AND F050TIERS.K050050COM = F.K050050COM
//                    and 7 = 7
//                    AND F050TIERS.F050CODE = :siret) F050TIERS
//          WHERE ROWNUM <= 200) V1
//  WHERE V1.K050TI8FAM = '1'
//    AND V1.CDA IS NULL
//    AND EXISTS (select 1
//           from f05ztype
//          where k05zt05typ = '1'
//            and k05z050tie = v1.f050ky)
//  ORDER BY TYPECLIENT,
//           F050ACTIF,
//           W2,
//           DECODE(K050TI8FAM, '2', 1, 2),
//           F050CODE,
//           TRFNEG,
//           F050NOM,
//           F020CP`;

// };
