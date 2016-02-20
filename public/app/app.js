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

angular.module('ispComplainer').controller('DashboardController', function($scope, $http) {
        $scope.title = 'ayy lmao';
});
