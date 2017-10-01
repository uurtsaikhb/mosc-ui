(function () {
    module.exports = Controller;

    function Controller ($location, dao, loadingIndicator) {
        var vm = this;

        vm.login = function () {
            var credentials = {
                username: vm.loginValue,
                password: vm.password
            };

            loadingIndicator.show(true);
            dao.login(credentials)
                .then(function (response) {
                    if (response.status === 200) {

                    	loadingIndicator.hide();
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