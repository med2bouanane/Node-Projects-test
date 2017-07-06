/**
 * Created by Mohamed on 01/04/14.
 */
var http = require('http');

function iniciar(){
    function arrancarServidor(req,res){

        res.writeHead(200,{'Content-Type':'text/html'});
        //Servir HTML
        var html ='<html><head><title>Hola Mundo</title></head><body><h1>Sirviendo Página desde node !!</h1></body></html>';
        res.write(html);
       //res.write('Hola Mundo');
        res.end();
    }


    var server = http.createServer(arrancarServidor).listen(8888);
}


exports.iniciar = iniciar;