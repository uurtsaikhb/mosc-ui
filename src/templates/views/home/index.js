angular.module('moscApp')
.controller('HomeController', HomeController);


function HomeController () {
	var vm = this;

	vm.message = 'Welcome to MoSC!';
}