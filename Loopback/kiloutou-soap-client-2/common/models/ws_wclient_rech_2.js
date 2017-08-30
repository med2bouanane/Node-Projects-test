'use strict';
const oracledb = require('oracledb'),
        config = require('../config'),
        ficheClient = require('./fiche-client');
module.exports = function(Wswclientrech2) {

config.desableAllMethods(Wswclientrech2)

Wswclientrech2.wswclientrech2 = function(cb){
    connectDB(Wswclientrech2)
    .then(response => 

        cb(null, response)) ;

}

Wswclientrech2.remoteMethod('wswclientrech2',{
     accepts: [
            
            ],
        http: {
            path: '/wswclientrech2',
            verb: 'get'
        },
        returns: [
            {arg: 'data',type: 'Wswclientrech2', root: true}
            ]
        
})


let _ficheClient = {
    IsActif:"true",
};
let ws = {
    COOKIE_F903KY:"dasfda",
    Region:"",
    critereclient:{},
    clients:[{
        ficheClient:_ficheClient,
        adresseClient:{},
        communicationsClients:[]
        }
    ]

};



let connectDB = function(model){
    let res;

    let promise = new Promise((resolve,reject)=>{
                oracledb.getConnection(
                {
                    user          : "DEV",
                    password      : "dev",
                    connectString : "FRKILPRO7002:2115/LOCD"
                })
                .then(function(connection) {
                    return connection.execute(
                    _select
                    )
                    .then(function(result) {

                        model.create(ws,(err,client) => {
                            //ficheClient.IsActif = true;
                            //client.nestRemoting(clients)
                            console.log("Clients:",client);
                            //client.clients[0].ficheClient.IsActif = true;
                            resolve(ws);
                        })
                        
                        // model.create(ws)
                        // .then(client=>{
                        //      console.log("Clients:",client);
                        //     return model.create(ws)
                        // })
                        // .then(res=>{
                        //     console.log("RES:",res);
                        //     resolve(res)
                        // })

                        // console.log(result.metaData);
                        // console.log(result.rows);
                        // resolve(result);

                        doRelease(connection);
                    })
                    .catch(function(err) {
                        console.log(err.message);
                        return connection.close();
                    });
                })
                .catch(function(err) {
                    console.error(err.message);
                });
        })
        return promise

};



    //"(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.0.17)(PORT=1522))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=XE)))"
let connect = function(model){
    let res;
  console.log("Connecting to oracle");
  oracledb.getConnection(
  {
    user          : "DEV",
    password      : "dev",
    connectString : "FRKILPRO7002:2115/LOCD"
  },

  function(err, connection)
  {
    if (err) {
      console.log("Error Connection",err);
      console.error(err.message);
      return;
    }
    connection.execute(
      _select,//{ outFormat: oracledb.OBJECT }
        //"WHERE idcliente = :id",
      //["345F"]
      // bind value for :id
      function(err, result)
      {
        if (err) {
          console.log("Error Result");
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log('RESULT=>',result.rows);
        console.log('METADATA=>',result.metaData[0].name);
        // for (var i = 0; i < result.rows.length; i++)
        //     console.log(JSON.parse(result.rows[i][0]));
        model = result.rows[0][0];
        console.log('RESULT: ',result.rows[0][0]);
        res = "HOLA MUNDO";//result.rows[0][0];
        //displayResults(response, result, deptid);
        return res;
        doRelease(connection);
      });
    
  });
    return res;
};

function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}

var _select=
`SELECT /* WSClientRecherche $Revision: 1.11 $ */
 V1.K050050COM AS W2,
 (SELECT (SELECT F2.F050NOM FROM F050TIERS F2 WHERE F2.F050KY = F1.F050GROUPE) AS F050NOM
    FROM F050TIERS F1
   WHERE F1.F050KY = V1.K050050COM) AS F050GROUPE,
 0.0 CAFacture,
 V1.F050KY AS F050KY,
 V1.F050TVAI AS F050TVAI,
 V1.F050NOM || ' ' || V1.F050PRENOM AS F050NOMPRE,
 V1.F050DIRECT AS F050DIRECT,
 V1.F050SIGLE AS F050SIGLE,
 DECODE(V1.F050ACTIF, '1', 'true', '2', 'false', 'Non Disponible') AS ISACTIF,
 (SELECT DECODE(MAX(F900DATE),
                NULL,
                NULL,
                TO_CHAR(CAST(MAX(F900DATE) AS TIMESTAMP) AT TIME ZONE 'UTC',
                        'yyyy-mm-dd"T"HH24:MI:SS"Z"')) AS LASTMODIFICATION
    FROM F900WOPETIERS
   WHERE F900TABLE = 'F050TIERS'
     AND F900ENREG = F050KY) AS LASTMODIF,
 (select NVL(TO_CHAR(Max(F901msg)), 'NON DISPONIBLE')
    from vt95typ
   where ft95filtre1 = 'STATUTCDA'
     and FT95KY = F050CDASTAT) AS STATUTECO,
 DECODE((SELECT 1
          FROM F05ZTYPE
         WHERE K05Z050TIE = F050KY
           AND K05ZT05TYP = 'KGS'
           AND ROWNUM = 1),
        1,
        'true',
        'false') AS UNIKCALL,
 DECODE((SELECT K05ZT05TYP
          FROM F05ZTYPE
         WHERE F05ZTYPE.K05ZT05TYP IN ('PART', 'ENTR')
           AND F05ZTYPE.K05Z050TIE = F050KY),
        'ENTR',
        '1',
        '0') AS EXTRANET,
 DECODE(V1.TYPECLIENT, 'ENTR', 'E', 'PART', 'P', 'KIL', 'K', V1.TYPECLIENT) AS TYPECLIENT,
 NVL((SELECT 'GCPT'
       FROM F05ZTYPE
      WHERE F05ZTYPE.K05Z050TIE = V1.K050050COM
        AND F05ZTYPE.K05ZT05TYP = 'GCPT'
        AND ROWNUM = 1),
     NVL((SELECT 'NAT'
           FROM F05ZTYPE
          WHERE F05ZTYPE.K05Z050TIE = V1.K050050COM
            AND F05ZTYPE.K05ZT05TYP = 'CN'
            AND ROWNUM = 1),
         NVL((SELECT 'REG'
               FROM FWPROPENT
              WHERE FWPROPENT.KWPROPENT050TIE = V1.K050050COM
                AND FWPROPENT.KWPROPENTT63STATU = 'PROP_ACT'
                AND FWPROPENT.FWPROPENTREGION = ''),
             (SELECT 'CPRO'
                FROM F150CARTE
               WHERE F150CARTE.K150050CLT = V1.K050050COM
                 AND F150CARTE.K150T17TYP = '14'
                 AND F150CARTE.F150ACTIF = '1')))) AS TRFNEG,
 NVL((SELECT SUBSTR(F05ZTYPE.K05ZT05TYP, 1, 1)
       FROM F05ZTYPE
      WHERE F05ZTYPE.K05Z050TIE = V1.F050KY
        AND (F05ZTYPE.K05ZT05TYP = 'VALIDK' OR
            F05ZTYPE.K05ZT05TYP = 'CERTIF')
        AND ROWNUM = 1),
     '') AS STATUT,
 V1.F020ADRES1 AS F020ADRES1,
 V1.F020ADRES2 AS F020ADRES2,
 V1.F020ADRES3 AS F020ADRES3,
 V1.F020ADRES4 AS F020ADRES4,
 V1.F020CP AS F020CP,
 V1.F020VILLE AS F020VILLE,
 V1.PAYS AS PAYS,
 DECODE(V1.K050TI8FAM, '1', V1.F050CODE, '2', V1.F050SIREN) AS F050CODE,
 V1.TELEPHONE AS TELEPHONE,
 V1.CARTEFID AS CARTEFID,
 DECODE(V1.F050ACTIF, '1', 'O', '2', 'N') AS CL_ACTIF,
 V1.F050CDASTAT AS F050CDASTAT
  FROM (SELECT (SELECT 1
                  FROM F05ZTYPE
                 WHERE F05ZTYPE.K05Z050TIE = F050TIERS.F050KY
                   and k05Zt05typ = 'CDA'
                   AND ROWNUM = 1) AS CDA,
               F050TIERS.F050KY AS F050KY,
               F050TIERS.F050TVAI AS F050TVAI,
               F050TIERS.K050TI8FAM AS K050TI8FAM,
               F050TIERS.F050NOM AS F050NOM,
               F050TIERS.F050PRENOM AS F050PRENOM,
               F050TIERS.F050DIRECT AS F050DIRECT,
               F050TIERS.F050SIGLE AS F050SIGLE,
               F050TIERS.K050TI8SFAM AS TYPECLIENT,
               (SELECT F020ADR.F020ADRES1
                  FROM F020ADR
                 WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020ADRES1,
               (SELECT F020ADR.F020ADRES2
                  FROM F020ADR
                 WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020ADRES2,
               (SELECT F020ADR.F020ADRES3
                  FROM F020ADR
                 WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020ADRES3,
               (SELECT F020ADR.F020ADRES4
                  FROM F020ADR
                 WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020ADRES4,
               (SELECT F020ADR.F020CP
                  FROM F020ADR
                 WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020CP,
               (SELECT F020ADR.F020VILLE
                  FROM F020ADR
                 WHERE F020ADR.F020KY = F050TIERS.K050020ADR) AS F020VILLE,
               (SELECT F901MSG
                  FROM VT53CTY, F020ADR
                 WHERE FT53KY = K020T53CTY
                   AND F020ADR.F020KY = F050TIERS.K050020ADR) AS PAYS,
               F050TIERS.F050CODE AS F050CODE,
               F050TIERS.F050SIREN AS F050SIREN,
               F050TIERS.K050050COM AS K050050COM,
               (SELECT F022MCOM.F022NUM
                  FROM F022MCOM
                 WHERE F022MCOM.F022NNNKY = F050TIERS.F050KY
                   AND F022MCOM.T022022LIE = '050'
                   AND ((F022MCOM.K022T22TYP = '2') OR
                       (F022MCOM.K022T22TYP = '6') OR
                       (F022MCOM.K022T22TYP = '1' AND NOT EXISTS
                        (SELECT 1
                            FROM F022MCOM A
                           WHERE A.F022NNNKY = F022MCOM.F022NNNKY
                             AND A.K022T22TYP = '6')) OR
                       (F022MCOM.K022T22TYP = '3' AND NOT EXISTS
                        (SELECT 1
                            FROM F022MCOM A
                           WHERE A.F022NNNKY = F022MCOM.F022NNNKY
                             AND A.K022T22TYP IN ('1', '6'))) OR
                       (F022MCOM.K022T22TYP = '4' AND NOT EXISTS
                        (SELECT 1
                            FROM F022MCOM A
                           WHERE A.F022NNNKY = F022MCOM.F022NNNKY
                             AND A.K022T22TYP IN ('1', '6', '3'))) OR
                       (F022MCOM.K022T22TYP = '5' AND NOT EXISTS
                        (SELECT 1
                            FROM F022MCOM A
                           WHERE A.F022NNNKY = F022MCOM.F022NNNKY
                             AND A.K022T22TYP IN ('1', '6', '3', '4'))))
                   AND ROWNUM = 1) AS TELEPHONE,
               F050TIERS.F050ACTIF AS F050ACTIF,
               (SELECT 'X'
                  FROM F150CARTE
                 WHERE F150CARTE.K150T17TYP = '8'
                   AND F150CARTE.F150ACTIF = '1'
                   AND F150CARTE.K150050CLT = F050TIERS.F050KY
                   AND ROWNUM = 1) AS CARTEFID,
               (SELECT VT95TYP.F901MSG
                  FROM VT95TYP
                 WHERE VT95TYP.FT95FILTRE1 = 'STATUTCDA'
                   AND VT95TYP.FT95KY = F050TIERS.F050CDASTAT) AS F050CDASTAT
          FROM (SELECT F050KY,
                       F050TVAI,
                       K050TI8FAM,
                       F050NOM,
                       F050PRENOM,
                       F050DIRECT,
                       K050TI8SFAM,
                       K050020ADR,
                       F050CODE,
                       F050SIREN,
                       F050TIERS.K050050COM,
                       F050ACTIF,
                       F050SIGLE,
                       F050CDASTAT
                  FROM F050TIERS,
                       (SELECT /*+INDEX (F,F050TIERS_IDX_002) */
                        DISTINCT F.K050050COM
                          FROM F050TIERS F
                         WHERE ROWNUM <= 200
                           AND F.F050CODE = '42329181400022'
                           AND (EXISTS (SELECT 1
                                          FROM F05ZTYPE
                                         WHERE K05Z050TIE = F.K050050COM
                                           AND K05ZT05TYP = 'ENTR'))) F
                 WHERE ROWNUM <= 200
                   AND F050TIERS.K050050COM = F.K050050COM
                   and 7 = 7
                   AND F050TIERS.F050CODE = '42329181400022') F050TIERS
         WHERE ROWNUM <= 200) V1
 WHERE V1.K050TI8FAM = '1'
   AND V1.CDA IS NULL
   AND EXISTS (select 1
          from f05ztype
         where k05zt05typ = '1'
           and k05z050tie = v1.f050ky)
 ORDER BY TYPECLIENT,
          F050ACTIF,
          W2,
          DECODE(K050TI8FAM, '2', 1, 2),
          F050CODE,
          TRFNEG,
          F050NOM,
          F020CP`;

};
