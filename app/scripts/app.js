'use strict';

/**
 * @ngdoc overview
 * @name angularNodeApp
 * @description
 * # angularNodeApp
 *
 * Main module of the application.
 */
angular
  .module('angularNodeApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
