'use strict';

angular.module('ispComplainer', [
  'ngRoute',
  'ispComplainer.dashboard',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
