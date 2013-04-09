define(function (require, exports) {

	var container = $('#editor');
	var cm;
	
	function init() {

		// add codemirror to container
		cm = CodeMirror(container.get(0));

	}

	// public API
	exports.init = init;

});