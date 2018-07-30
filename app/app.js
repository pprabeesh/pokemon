'use strict';

// Declare app level module which depends on views, and components
var app= angular.module('pokemonApp', [
  'ngRoute',
  'ngResource',
  'pokemon.list',
  'pokemon.service'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({ redirectTo: '/pokelist'});
}]);

app.filter('startFrom', function () {
  return function (input, start) {
    start = +start; 
    return input.slice(start);
  }
});
