/**
 * Created by Mohamed on 02/04/14.
 */
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

var dPort = 27017;
var dHost = "localhost";
var dName = "videos";

var sus = {};

//definimos la bd
sus.db = new Db(dName,new Server(dHost,dPort,{auto_reconnect:true},{}));
sus.db.open(function(e,d){

    if(e)
    {
        console.log(e);
    }else{
        console.log("Conectado a la BD "+dName);
    }
});


sus.suscriptors = sus.db.collection('suscriptors');

module.exports = sus;

sus.new = function(newData,callback){
    sus.suscriptors.findOne({email:newData.email},function(e,obj){
        if(obj){
            callback('Email ya existe');
        }else{
            sus.suscriptors.insert(newData,callback(null));
        }
    });
}