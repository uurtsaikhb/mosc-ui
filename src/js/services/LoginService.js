angular.module('moscApp')
	.factory('LoginService', LoginService);

function LoginService () {
	var credentials = {};

	return {
		set: set,
		get: get
	};

	function set (username, password) {
		credentials.username = username;
		credentials.password = password;
	}

	function get () {
		return credentials;
	}
}