(function () {

	module.exports = Controller;

	function Controller ($location) {
		var vm = this;

		vm.login = function () {
			$location.url('/dashboard');
		}
	}
})();