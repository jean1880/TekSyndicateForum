'use strict';

/**
 * @ngdoc service
 * @name tekForumApp.FactoryTopic
 * @description
 * # FactoryTopic
 * Factory in the tekForumApp.
 */
angular.module('tekForumApp')
    .factory('FactoryTopic', function ($http, ServerAddress) {

        // Public API here
        return {
            get: function () {
                return $http.get(ServerAddress + 'top.json');
            },
            getLatest: function () {
                return $http.get(ServerAddress + 'latest.json')
            }
        };
    });