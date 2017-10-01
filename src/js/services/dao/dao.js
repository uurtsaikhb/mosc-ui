(function () {

	module.exports = function ($q, $http) {

		var DEFAULT_HEADERS = {
			'Always-OK-Response': 'true',
			'Cache-Control': 'no-cache',
			Expires: '-1',
			Pragma: 'no-cache'
		};

		var REQUEST_TYPES = {
			delete: 'DELETE',
			get: 'GET',
			post: 'POST',
			put: 'PUT'
		};


		return {
			login: login
		};

		function login (credentials) {
			console.log('dao: login');

			return makeRequest(REQUEST_TYPES.post, '/login', credentials);
		}

		/**
		 * Perform http request
		 * @param method
		 * @param path
		 * @param payload
		 * @param headers
		 * @param queryParameters
		 * @returns {Promise}
		 */
		function makeRequest(method, path, payload, headers, queryParameters) {
			var deferred = $q.defer();
			//todo need to change

			var endpoint = 'https://jsonplaceholder.typicode.com';
			path = '/posts/1';
			method = 'GET';

			queryParameters = queryParameters || {};
			headers = headers || {};

			$http({
				method: method,
				url: endpoint + path,
				params: queryParameters,
				headers: angular.extend(headers, DEFAULT_HEADERS),
				data: payload
			}).then(function (response) {
				if (response.status === 200) {
					deferred.resolve(response);
				}

				deferred.reject(response);

			}, function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}
	}

})();