'use strict';

angular.module('pokemon.list', ['ngRoute', 'pokemon.service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pokelist', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

  .controller('HomeCtrl', ['Pokemons', '$scope', '$filter', function (Pokemons, $scope, $filter) {
     Pokemons.query().$promise.then(function(result){
       $scope.pokemonList = result.results;
       var i=1;
       $scope.pokemonList.forEach(element => {
         element.id=i;
         i++;
       });
       $scope.currentPage = 0;
       $scope.pageSize = 20;
       $scope.getData = function () {
         return $filter('filter')($scope.pokemonList, $scope.searchQuery);
       }
       $scope.numberOfPages = function () {
         return Math.ceil($scope.getData().length / $scope.pageSize);
       }
     });
}]);