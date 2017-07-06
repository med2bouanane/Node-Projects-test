/**
 * Created by Mohamed on 26/03/14.
 */

function inicio(){

    console.log("Has entrado en la pagina de Inicio");

    return "Inicio";
}

function pagina1(){

    console.log("Has entrado en la pagina (1)");

    return "Página (1)";
}

function pagina2(){

    console.log("Has entrado en la pagina (2)");

    return "Página (2)";
}

function favicon(){

    console.log("Se ha pedido favicon ");

    return "";
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;