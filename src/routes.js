(function () {

    var controller = {
        homeController: require('./templates/views/home'),
        loginController: require('./templates/views/login'),
        registerController: require('./templates/views/register'),
        dashboardController: require('./templates/views/dashboard')
    };

    module.exports = function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/home/index.html',
                controller: controller.homeController,
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: '/views/login/index.html',
                controller: controller.loginController,
                controllerAs: 'vm'
            })
            .when('/register', {
                templateUrl: '/views/register/index.html',
                controller: controller.registerController,
                controllerAs: 'vm'
            })
            .when('/dashboard', {
                templateUrl: '/views/dashboard/index.html',
                controller: controller.dashboardController,
                controllerAs: 'vm'
            })
            .otherwise('/');
    }
})();