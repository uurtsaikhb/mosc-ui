(function () {

    module.exports = Controller;

    function Controller ($location, dao) {
        var vm = this;

        vm.login = function () {
            debugger
            var credentials = {
                username: vm.loginValue,
                password: vm.password
            };


            dao.login(credentials)
                .then(function (response) {
                    console.log(response);
                    $location.url('/dashboard');
                })
                .catch(function (response) {
                    console.log(response)
                });
        }
    }
})();