(function () {

	angular.module('moscApp')
		.factory('loadingIndicator', require('./factory'))
		.directive('loadingIndicator', require('./directive'));
})();
