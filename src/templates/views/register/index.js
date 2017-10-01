(function () {

	module.exports = Controller;

	function Controller ($location) {
		var vm = this;


		vm.register = function () {
			console.log('Registering user');

			$location.url('/dashboard');

		}
	}

})();