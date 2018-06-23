var app = angular.module('Sims4Pal', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'ui.bootstrap']);
app.controller("MainController", ['$scope', function($scope) {}]);
angular.module('Sims4Pal')
.config(function($locationProvider, $routeProvider) {
  
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl: 'resources/home.html',
    controller: 'HomeController'
  })
  .when('/home', {
    templateUrl: 'resources/home.html',
  })
  .when('/cheats', {
    templateUrl: 'resources/cheatspage.html',
    controller: 'CheatsController'
  })
  .when('/mods', {
    templateUrl: 'resources/customContent.html',
    controller: 'PanelController'
  })
  .when('/collections', {
    templateUrl: 'resources/collections.html',
    controller: 'TableController'
  })
  .when('/guides', {
    templateUrl: 'resources/guides.html',
    controller: 'AccordionDemoCtrl'
  })
  .when('/accounts/register', {
    templateUrl: 'resources/register.html',
    controller: 'RegisterController'
  })
  .when('/accounts/login', {
    templateUrl: 'resources/login.html',
  })
  .when('/accounts/logout', {
    templateUrl: 'resources/logout.html',
    controller: 'LogoutController'
  })
  .otherwise({
    redirectTo: '/'
  }); // if not above path
});

