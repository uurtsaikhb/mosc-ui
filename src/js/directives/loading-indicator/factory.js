(function () {
	"use strict";

	module.exports = function () {
		var currentState;
		var observers;

		reset();

		return {
			show: show,
			hide: hide,
			observeState: observeState,
			reset: reset
		};

		function show (visible) {
			currentState = typeof visible === 'boolean' ? visible : true;
			angular.forEach(observers, function (observer) {
				observer(visible);
			});
		}

		function hide () {
			show(false);
		}

		function observeState(callback) {
			observers.push(callback);

			if (currentState !== null) {
				callback(currentState);
			}
		}

		function reset() {
			observers = [];
			currentState = null;
		}
	}
})();