"use strict";

var _user = require("./user");

// Sin transpilar
//const User = require('./user')

var user = new _user.User("Mohamed", 36); // Hay que transpilar

user.saludar();