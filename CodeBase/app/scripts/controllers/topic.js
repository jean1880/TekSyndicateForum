'use strict';

/**
 * @ngdoc function
 * @name tekForumApp.controller:TopicCtrl
 * @description
 * # TopicCtrl
 * Controller of the tekForumApp
 */
angular.module('tekForumApp')
  .controller('TopicCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
