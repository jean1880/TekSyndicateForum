'use strict';

/**
 * @ngdoc function
 * @name tekForumApp.controller:TopicCtrl
 * @description
 * # TopicCtrl
 * Controller of the tekForumApp
 */
angular.module('tekForumApp')
    .controller('TopicCtrl', function ($scope, $routeParams, FactoryTopic, FactoryPost) {
        $scope.init = function () {
            FactoryTopic.get($routeParams.id).success(function (data) {
                $scope.topic = data;
                $scope.postCount = data.post_stream.posts.length;
                $scope.MAXPOSTCOUNT = data.posts_count
                console.log($scope.topic);
            });
        };
        // called when nearing bottom of the page, looks for more posts, if available
        $scope.FetchPosts = function () {
            if ($scope.postCount < $scope.MAXPOSTCOUNT) {
                var fetchArray = [];
                // build array of post ids to fetch
                for (var i = 0; i < 20; i++) {
                    // if target id exists push into fetch array, otherwise exit loop
                    if ($scope.topic.post_stream.stream[i + $scope.postCount]) {
                        fetchArray.push($scope.topic.post_stream.stream[i + $scope.postCount]);
                    } else {
                        break;
                    }
                }
                // iterate postCount

                // fetch posts and add to posts array
                FactoryPost.get($scope.postCount).success(function (data) {
                    console.log(data);
                    $scope.topic.post_stream.posts.push.apply($scope.topic.post_stream.posts, data.post_stream.posts);
                    $scope.postCount += data.post_stream.posts.length;
                })
            }
        };
        $scope.init();
    });