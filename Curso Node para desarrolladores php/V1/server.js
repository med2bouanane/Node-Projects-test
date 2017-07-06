/**
 * Created by mohamedbouanane on 1/12/14.
 */
var http = require('http');

function onRequest(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hola Mundo');
    res.end();
}

var server = http.createServer(onRequest).listen(8000);
console.log('Servidor corriendo en puerto 8000');