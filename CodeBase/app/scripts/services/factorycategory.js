'use strict';

/**
 * @ngdoc service
 * @name tekForumApp.FactoryCategory
 * @description
 * # FactoryCategory
 * Factory in the tekForumApp.
 */
angular.module('tekForumApp')
    .factory('FactoryCategory', function ($http) {
        var config = {
            withCredentials: true
        };
        // Public API here
        return {
            get: function () {
                return $http.get('https://forum.teksyndicate.com/categories.json', config);
            }
        };
    });