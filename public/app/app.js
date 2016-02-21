'use strict';

angular.module('ispComplainer', ['ngResource', 'ngRoute']);

angular.module('ispComplainer').config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	});
        $routeProvider.when('/', { templateUrl: '/partials/dashboard.jade', controller: 'DashboardController' });
        $routeProvider.otherwise({ templateUrl: '/partials/dashboard.jade', controller: 'DashboardController' });
});

angular.module('ispComplainer').controller('DashboardController', function($scope, $http, $timeout, ComplaintService) {
        $scope.manualTrigger = function() {
                ComplaintService.run().then(function(result) {
                        var compiledHTML = $compile("<h1>ayyyyy</h1>")($scope);
                        $("manual-trigger-results").append(compiledHTML);
                });
        };
});

angular.module('ispComplainer').factory('ComplaintService', function($http) {
        return {
                run: function() {
                        return $http.get('/api/complain');
                }
        }
});
