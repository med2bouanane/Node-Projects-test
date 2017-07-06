/**
 * Created by Mohamed on 26/03/14.
 */

// http: es un modulo que contiene todos los módulos necesarios
    // para hacer funcionar un servidor web.
var servidor = require('http');
var url = require('url');// registrar la direccion de la url
var fs = require('fs');// leer y escribir ficheros

function iniciar(manejador,enrutar){// le paso enrutar para enrutar las paginas del Servidor W
    function arrancaServidor(requiere,respuesta){

        var ruta = url.parse(requiere.url).pathname;// recojo los parametros (pagina1,pagina2...)

        console.log("Alguien se ha conectado");// Los navegadores realizan dos peticiones (respuesta,icon)


       var contenido = enrutar(manejador,ruta);

        // guardar trazas
        var registro = fs.createWriteStream('registro.txt',{'flags':'a'});// escribir en modo añadir
        registro.write(ruta+'\n');
        respuesta.writeHead(200,{"Content-Type":"text/html"});
        respuesta.write(contenido);
        respuesta.end();// Finalizar la conexion
    }

    servidor.createServer(arrancaServidor).listen(8888);
}

// puedo acceder a iniciar desde otros modulos que usen el modulo servidor.js
exports.iniciar = iniciar; // exports con el cual vamos a publicar los accesos a nuestro módulo desde otros.