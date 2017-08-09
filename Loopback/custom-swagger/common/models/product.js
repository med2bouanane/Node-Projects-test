'use strict';

module.exports = function(Product) {

    var verbs = ["patchOrCreate","create","replaceOrCreate","deleteById","replaceById","createChangeStream","updateAll","prototype.patchAttributes"]

    verbs.forEach(function(element) {
        Product.disableRemoteMethodByName(element);
    });

    // Product.disableRemoteMethodByName("patchOrCreate");
    // Product.disableRemoteMethodByName("create");
    // Product.disableRemoteMethodByName("replaceOrCreate");
    // Product.disableRemoteMethodByName("deleteById");
    // Product.disableRemoteMethodByName("replaceById");
    // Product.disableRemoteMethodByName("createChangeStream");
    // Product.disableRemoteMethodByName("updateAll");
    // Product.disableRemoteMethodByName("prototype.patchAttributes");
};
