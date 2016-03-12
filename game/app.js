(function(){
    'use strict';

    angular.module('MathHack', ['ngMaterial'])
        .controller('ListController', ['$scope', '$http', function($scope, $http){

            $scope.results = [];

            $scope.isSearching = false;

            $scope.search = function () {

                $scope.isSearching = true;


            };

        }]);
})();