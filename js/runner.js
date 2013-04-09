define(function (require, exports) {

	var display = require('display');
	var editor  = require('editor');

	function run() {

		display.init();
		editor.init();

	}

	// public API
	exports.run = run;

});