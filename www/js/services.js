angular.module('services',[])
.factory('loginService',function ($http,$q){


})

.factory('WordlistService',function ($http,$q){
	return {
		getWordlist : function () {
			var deferred= $q.defer();
	$http.get('json/wordlist.json')
	.success(function (data){
		deferred.resolve(data);
	})
	.error(function (err){
		deferred.reject(err);
	});
	return deferred.promise;

		}
	}
	
})
;