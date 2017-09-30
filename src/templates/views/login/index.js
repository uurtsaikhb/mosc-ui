angular.module('moscApp')
    .controller('LoginController', LoginController);

function LoginController ($location) {
	var vm = this;

	vm.login = function () {
		if (vm.username && vm.password) {
			$location.url('/dashboard');
		}
	}
}