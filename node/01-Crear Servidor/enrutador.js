/**
 * Created by Mohamed on 26/03/14.
 */

function enrutar(manejador,ruta){

    console.log("voy a rutear algo para "+ruta);
    if(typeof manejador[ruta] === 'function')
       return manejador[ruta]();
    else
    console.log("No Existe una Funcón para esa ruta:"+ruta);
}

exports.enrutar = enrutar;