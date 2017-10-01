(function () {
	init ();

	function init () {
		var angular = require('angular');
			require('angular-route');

		var app = angular.module('moscApp', ['ngRoute'])
			.config(require('./routes'));

		app.run(function () {
			console.log('app running...')
		});

		angular.element(document).ready(function () {
			angular.bootstrap(document, ['moscApp'], { strictDi: false });
		});
	}
})();