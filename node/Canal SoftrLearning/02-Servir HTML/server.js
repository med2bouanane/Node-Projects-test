/**
 * Created by Mohamed on 01/04/14.
 */

var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

function iniciar(){

    function arrancarServidor(req,res){

        var contentType = 'text/html';

        var ruta = '.'+((req.url=='/')?'/index.html':req.url);
        console.log('req.url(ruta):'+ruta);

        var extension = path.extname(ruta);

        switch (extension){
            case '.css':contentType = 'text/css';
                break;
            case '.js':contentType = 'text/javascript';
                break;
        }

        path.exists(ruta,function(existe){
            if(existe){
                fs.readFile(ruta,function(error,contenido){
                   if(error){
                       res.writeHead(500);
                       res.end();
                   }
                    else{
                       res.writeHead(200,{'Content-Type':contentType});
                       res.end(contenido);
                   }
                });
            }else{
                res.write(404);
                res.end();
            }
        });
        console.log('extension:'+extension);

        /*
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Hola Mundo');
        res.end();*/

    }

    var servidor = http.createServer(arrancarServidor).listen(8888);
    console.log('Servidor Corriendo en el Puerto 8888...');
}

exports.iniciar = iniciar;