'use strict';

/**
 * @ngdoc function
 * @name tekForumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tekForumApp
 */
angular.module('tekForumApp')
    .controller('MainCtrl', function ($scope, FactoryCategory, FactoryTopic, $cookies, localStorageService) {
        /**
         * Loads the categories from the database to be renddered to the page
         * @method GetCategories
         **/
        $scope.GetCategories = function () {
            FactoryCategory.get().success(function (Data) {
                console.log(Data);
                $scope.categoryList = Data.category_list.categories;
                localStorageService.set('categoryList', JSON.stringify(Data.category_list.categories));
            });
        };

        /**
         * Loads the topics from the database to be renddered to the page
         * @method GetTopics
         **/
        $scope.GetTopics = function () {
            FactoryTopic.getLatest().success(function (Data) {
                console.log(Data);
                $scope.topicList = Data.topic_list.topics;
                localStorageService.set('topicList', JSON.stringify(Data.topic_list.topics));
            });
        };

        /**
         * Loads the topics from the database to be renddered to the page
         * @method GetTopics
         **/
        $scope.init = function () {
            $cookies['XSRF-TOKEN'] = 'M8JjiA4/pV6L2pR94qd4BQMoaCmLXsmgLks7xdNd+HA=';
            // if available, load the categories and topics from local storage, to quickly render results to user before rebuilding from data on server
            $scope.categoryList = localStorageService.get('categoryList');
            $scope.topicList = localStorageService.get('topicList');

            // get updated categories and topics from the server
            $scope.GetCategories();
            $scope.GetTopics();

        };

        $scope.init();

    });