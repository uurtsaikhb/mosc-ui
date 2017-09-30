angular.module('moscApp', [
    'ngRoute'
])
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/login/index.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		})
        .when('/dashboard', {
            templateUrl: 'views/home/index.html',
	        controller: 'HomeController',
	        controllerAs: 'vm'
        })
		.otherwise('/');
});
