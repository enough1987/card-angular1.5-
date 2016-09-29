


var testApp = angular.module("testApp", ["ngRoute"])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../views/test.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).         
      otherwise({
        templateUrl: '../views/test.html',
        controller: 'MainCtrl',
        controllerAs: 'main'        
      });

      $locationProvider.html5Mode(true);
  });





