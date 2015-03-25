'use strict';

/**
 * @ngdoc function
 * @name tekForumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tekForumApp
 */
angular.module('tekForumApp')
    .controller('MainCtrl', function ($scope, FactoryCategory, FactoryTopic, $cookies) {
        $scope.categoryList = $cookies['categoryList'] ? JSON.parse($cookies['categoryList']) : null;
        $scope.topicList = $cookies['topicList'] ? JSON.parse($cookies['topicList']) : null;


        $scope.GetCategories = function () {
            FactoryCategory.get().success(function (Data) {
                console.log(Data);
                $scope.categoryList = Data.category_list.categories;
                $cookies['categoryList'] = JSON.stringify(Data.category_list.categories);
            });
        };

        $scope.GetTopics = function () {
            FactoryTopic.getLatest().success(function (Data) {
                console.log(Data);
                $scope.topicList = Data.topic_list.topics;
                $cookies['topicList'] = JSON.stringify(Data.topic_list.topics);
            });
        };

        $scope.init = function () {
            $cookies['XSRF-TOKEN'] = 'M8JjiA4/pV6L2pR94qd4BQMoaCmLXsmgLks7xdNd+HA=';
            $scope.GetCategories();
            $scope.GetTopics();

        };

        $scope.init();

    });