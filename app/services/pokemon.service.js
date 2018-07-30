
angular.module('pokemon.service', ['ngResource'])
.factory('Pokemons', ['$resource',
        function ($resource) {
            return $resource('https://pokeapi.co/api/v2/pokemon/?limit=151', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]);