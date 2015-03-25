'use strict';

/**
 * @ngdoc function
 * @name tekForumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tekForumApp
 */
angular.module('tekForumApp')
    .controller('MainCtrl', function ($scope, FactoryCategory, $cookies) {
        $scope.GetCategories = function () {
            FactoryCategory.get().success(function (Data) {
                console.log(Data);
            })
        };

        $cookies['XSRF-TOKEN'] = 'M8JjiA4/pV6L2pR94qd4BQMoaCmLXsmgLks7xdNd+HA=';
        $scope.GetCategories();
    });