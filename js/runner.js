define(function (require) {

	var display = require('display');
	var editor  = require('editor');

	function run() {

		display.init();
		editor.init();

	}

	return {
		run: run
	}

});