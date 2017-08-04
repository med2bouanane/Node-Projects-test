"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
	function User(name, age) {
		_classCallCheck(this, User);

		this.name = name;
		this.age = age;
	}

	_createClass(User, [{
		key: "saludar",
		value: function saludar() {
			console.log("Hola " + this.name);
		}
	}]);

	return User;
}();

// Hay que transpilar (Babel)
exports.User = User;
//export default { User }


// Sin transpilar
//module.exports = User