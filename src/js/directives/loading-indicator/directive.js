(function () {
	'use strict';

	var CLASS_LOADING = 'state-loading';

	/**
	 * @description
	 * Renders an overlay containing a centered spinner graphic to indicate to the user when the UI is busy and
	 * temporarily can't be interacted with
	 * @ngInject
	 */
	module.exports = function (loadingIndicator) {
		var isPreviouslyDisplayed = false;

		return {
			restrict: 'A',
			replace: true,
			templateUrl: './template.html',
			link: function (scope, element) {
				var wrappedContainer = angular.element(document.querySelector('loading-indicator'));

				if (isPreviouslyDisplayed) {
					wrappedContainer.addClass(CLASS_LOADING);
				}

				scope.$on('$destroy', function () {
					loadingIndicator.resetState();
				});

				loadingIndicator.observeState(function (showLoader) {
					isPreviouslyDisplayed = showLoader;

					element[showLoader ? 'addClass' : 'removeClass'](CLASS_LOADING);
				});
			}
		};
	};
})();
