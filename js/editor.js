define(function (require) {

	var container = $('#editor');
	var cm;
	
	function init() {

		// add codemirror to container
		cm = CodeMirror(container.get(0));

	}
	
	return {
		init: init
	};

});