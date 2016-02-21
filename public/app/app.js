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

angular.module('ispComplainer').controller('DashboardController', function($scope, $http, $compile, ComplaintService) {
        $scope.manualTrigger = function() {
                $scope.manualLoading = true;
                ComplaintService.run().then(function(result) {
                        var compiledHTML = $compile(
                                "<table class = 'table table-striped'><tr><th>Download Speed</th><th>Upload Speed</th><th>IP Address</th><th>Test Location</th><th>Distance</th><th>Ping</th><th>Twitter Post Status Code</th></tr>"
                                + "<tr><td>" + result.data.downloadSpeed + "</td>"
                                + "<td>" + result.data.uploadSpeed + "</td>"
                                + "<td>" + result.data.ipAddress + "</td>"
                                + "<td>" + result.data.testLocation + "</td>"
                                + "<td>" + result.data.distance + "</td>"
                                + "<td>" + result.data.ping + "</td>"
                                + "<td>" + result.data.twitterPostResponseCode + "</td></tr></table>")($scope);
                        $("#manual-trigger-results").append(compiledHTML);
                        $scope.manualLoading = false;
                });
        };
        $scope.schedule = function() {
                
        };
});

angular.module('ispComplainer').factory('ComplaintService', function($http) {
        return {
                run: function() {
                        return $http.get('/api/complain');
                }
        }
});
