/**
 * Created by mohamedbouanane on 1/12/14.
 */
var http = require('http');
var fs = require('fs');
var url = require('path');


function onRequest(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});

    console.log(req.url);

    var rutaArchivo = './views'+((req.url=='/')?'/index.html':req.url);
    console.log(rutaArchivo);

    var extension = url.extname(rutaArchivo);
    var contentType='text/html';
    if(extension == '.css')
        contentType='text/css';
    else if(extension == '.js')
        contentType='text/javascript';

    //url.exists(rutaArchivo,function(existe){

      //  if(existe)
      //  {
            fs.readFile(rutaArchivo,function(error,content){

                if(error)
                {
                    console.log(error);
                    res.writeHead(500);
                    res.end();
                }
                else
                {
                    res.writeHead(200,{'Content-Type':contentType});
                    res.end(content);

                }
            });
        //}
        //else
        //{
         //   res.writeHead(404);
          //  res.end();
        //}
    //});

    /*
    var arr =[
        '<html>',
            '<head>',
                '<title>Hola Mundo</title>',
                '<link rel="stylesheet" href="./style.css">',
            '</head>',
            '<body>',
                '<h1>Hola Mundo</h1>',
            '</body>',
        '</html>'
    ];
    res.write(arr.join(''));

    res.write('<h1>Hola a todos</h1>');
    res.end();
    */
}

var server = http.createServer(onRequest).listen(8000);
console.log('Servidor corriendo en puerto 8000');