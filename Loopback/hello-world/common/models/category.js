module.exports = function(Category) {
  
    // Validación
    Category.validatesUniquenessOf('name', {message: 'el nombre debe ser unico'});
};