define(function (require, exports) {

	var container = $('#display');
	
	function init() {

		// add iframe to display
		container.append('<iframe src="iframe.html" scrolling="yes"></iframe>');

	}

	// public API
	exports.init = init;

});