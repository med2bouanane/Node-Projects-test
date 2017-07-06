/**
 * Created by Mohamed on 26/03/14.
 */

var servidor = require("./servidor");
var enrutador = require("./enrutador");
var peticiones = require("./peticiones");


// Manejador
// Un array para elegir que peticion voy a ejecutar
var manejador = {};
manejador['/'] = peticiones.inicio;
manejador['/pagina1'] = peticiones.pagina1;
manejador['/pagina2'] = peticiones.pagina2;
manejador['/favicon.ico'] = peticiones.favicon;

servidor.iniciar(manejador,enrutador.enrutar);