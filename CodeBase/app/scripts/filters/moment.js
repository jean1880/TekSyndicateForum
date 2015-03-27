'use strict';

/**
 * @ngdoc filter
 * @name tekForumApp.filter:moment
 * @function
 * @description
 * # moment
 * Filter in the tekForumApp.
 */
angular.module('tekForumApp')
    .filter('moment', function () {
        return function (input) {
            console.log(input);
            console.log(moment(input).fromNow());
            return moment(input).fromNow();
        };
    });