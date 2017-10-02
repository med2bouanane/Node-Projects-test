
const Enum = require('enum');


const select={ 
  SELECT: 
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
                           AND F.F050CODE = :siret
                           AND (EXISTS (SELECT 1
                                          FROM F05ZTYPE
                                         WHERE K05Z050TIE = F.K050050COM
                                           AND K05ZT05TYP = 'ENTR'))) F
                 WHERE ROWNUM <= 200
                   AND F050TIERS.K050050COM = F.K050050COM
                   and 7 = 7
                   AND F050TIERS.F050CODE = :siret) F050TIERS
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
          F020CP`,
    // keys for the JSON result      
    tags : ['none','none','CAFACTURE','CodeClient','NumeroTVAIntracommunautaire','siret',
            'none','none','ISACTIF','LASTMODIF','StatutEconomique',
            'UNIKCALL','EXTRANET','TYPECLIENT','none','StatutEconomique',
            'Numero_et_rue','MentionSpeciale','ComplementAdresse',
            'ComplementNom','Codepostal','localite','Pays','siret2','Value',
            'none','none','none'],
    /**
     * Convert the array keys to a enum with key position
     * @param  {Array} result
     * @return { Enum } rows_pos_enum
     */
    getResultEnum: function(result){
      let resul_rows = result.rows[0]
      let rows_pos_str = '{'
      let link = select.tags
      for (let i=0;i<link.length-1;i++)
          rows_pos_str +=`"${link[i]}":${i},` 
      rows_pos_str +=`"${link[link.length-1]}":${link.length-1}}` 

      let rows_pos_obj = JSON.parse(rows_pos_str)
      let rows_pos_enum = new Enum(rows_pos_obj, { ignoreCase: true })
      return rows_pos_enum
    },
    // Metadata - Tag
    linkMetadataTag: function(metaData){
      let rows_str = '{'
      for (let i=0;i<metaData.length-1;i++)
        rows_str +=`"${metaData[i].name}":"${select.tags[i]}",` 
      rows_str +=`"${metaData[metaData.length-1].name}":"${select.tags[metaData.length-1]}"}` 

      let rows_obj = JSON.parse(rows_str)
      let rows_enum = new Enum(rows_obj, { ignoreCase: true })
      return rows_enum
    }                    
}


module.exports = select          