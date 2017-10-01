(function () {
    module.exports = Controller;

    function Controller ($location, dao) {
        var vm = this;

        vm.login = function () {
            var credentials = {
                username: vm.loginValue,
                password: vm.password
            };

            dao.login(credentials)
                .then(function (response) {
                    if (response.status === 200) {
	                    $location.url('/dashboard');
                    } else {
	                    $location.url('/login');
                    }
                })
                .catch(function (response) {
                    console.log(response)
                });
        }
    }
})();