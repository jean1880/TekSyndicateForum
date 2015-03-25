'use strict';

/**
 * @ngdoc service
 * @name tekForumApp.FactoryPost
 * @description
 * # FactoryPost
 * Factory in the tekForumApp.
 */
angular.module('tekForumApp')
  .factory('FactoryPost', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
