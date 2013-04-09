define(function (require) {

	var container = $('#display');
	
	function init() {

		// add iframe to display
		container.append('<iframe src="iframe.html" scrolling="yes"></iframe>');

	}
	
	return {
		init: init
	};

});