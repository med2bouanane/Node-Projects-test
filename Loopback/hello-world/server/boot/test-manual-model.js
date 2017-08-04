
// Forma 1 - POR HERENCIA
var category_herencia = function(server) {

  var Model = server.loopback.Model;
  var Category = Model.extend('categories');

};

// FORMA 2 - POR CONFIGURACIÓN
var category_config = function(server) {

  var config = {
   dataSource: 'db',
   public: true
  };
  server.model('Category', config);

};

// FORMA 3 (LA RECOMENDADA) - CON loopback.createModel
var category_createModel = function(server) {

  var Category = server.loopback.createModel('Category');


};

module.exports = {
    //category_herencia,
    //category_config,
    category_createModel
}