'use strict';

/**
 * @ngdoc function
 * @name tekForumApp.controller:TopicCtrl
 * @description
 * # TopicCtrl
 * Controller of the tekForumApp
 */
angular.module('tekForumApp')
    .controller('TopicCtrl', function ($scope, $routeParams, FactoryTopic) {
        $scope.init = function () {
            FactoryTopic.get($routeParams.id).success(function (data) {
                $scope.topic = data;

                console.log(data);
            });
        };

        $scope.init();
    });