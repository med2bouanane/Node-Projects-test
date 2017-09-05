
let data = class data{

    constructor(result,rows_pos_enum){
        this.result = result
        this.rows_pos_enum = rows_pos_enum
    }



    fiche(){
        return {
                    CodeClient : this.result.rows[0][this.rows_pos_enum.CodeClient.value],
                    NumeroTVAIntracommunautaire : this.result.rows[0][this.rows_pos_enum.NumeroTVAIntracommunautaire.value],
                    ISACTIF : this.result.rows[0][this.rows_pos_enum.ISACTIF.value],
                    LASTMODIF:this.result.rows[0][this.rows_pos_enum.LASTMODIF.value],
                    StatutEconomique:this.result.rows[0][this.rows_pos_enum.StatutEconomique.value],
                    UNIKCALL:this.result.rows[0][this.rows_pos_enum.UNIKCALL.value],
                    EXTRANET:this.result.rows[0][this.rows_pos_enum.EXTRANET.value],
                    TYPECLIENT:this.result.rows[0][this.rows_pos_enum.TYPECLIENT.value],
                    StatutEconomique:this.result.rows[0][this.rows_pos_enum.StatutEconomique.value],
                    InfoChantier:{
                        CAFacture : this.result.rows[0][this.rows_pos_enum.CAFACTURE.value]
                    }
                }
    } 
    address(){
        return {
                    Numero_et_rue :this.result.rows[0][this.rows_pos_enum.Numero_et_rue.value],
                    MentionSpeciale :this.result.rows[0][this.rows_pos_enum.MentionSpeciale.value],
                    ComplementAdresse :this.result.rows[0][this.rows_pos_enum.ComplementAdresse.value],
                    ComplementNom :this.result.rows[0][this.rows_pos_enum.ComplementNom.value],
                    Codepostal :this.result.rows[0][this.rows_pos_enum.Codepostal.value],
                    localite :this.result.rows[0][this.rows_pos_enum.localite.value],
                    Pays :this.result.rows[0][this.rows_pos_enum.Pays.value]
                }
    }  
    critereclient() {
        return {siret: this.result.rows[0][this.rows_pos_enum.siret.value]} 
    } 
    communicationsClient() {
        return {Value: this.result.rows[0][this.rows_pos_enum.Value.value],Nature:this.result.metaData[this.rows_pos_enum.Value.value].name} 
    }              
}


module.exports = data