"use strict";

// Este código funciona sin transpilar
// node src/js/test_sin_transpilar.js

var name = "Mohamed";
var saludar = function saludar(n) {
  return console.log("Hola " + n);
};

saludar(name);