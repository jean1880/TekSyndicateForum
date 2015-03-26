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
                $scope.postCount = data.post_stream.posts.length;
                $scope.MAXPOSTCOUNT = data.posts_count;
                $scope.FormatImages();
                console.log($scope.topic);
            });
        };

        $scope.FormatImages = function () {
            $('#topic-board').find('img').each(function () {
                $(this).addClass('img img-responsive');
                if (!$(this).attr('src').match('^http')) {
                    $(this).attr('src', 'https://' + $(this).attr('src'));
                }
            });
        };
        // called when nearing bottom of the page, looks for more posts, if available
        $scope.FetchPosts = function () {
            if ($scope.postCount < $scope.MAXPOSTCOUNT) {
                var request, requestAttach = '';
                // build array of post ids to fetch
                for (var i = 0; i < 20; i++) {
                    // if target id exists push into fetch array, otherwise exit loop
                    if ($scope.topic.post_stream.stream[i + $scope.postCount]) {
                        if (i == 1) {
                            requestAttach = '&';
                        }
                        request = request + requestAttach + 'post_ids%5B%5D=' + $scope.topic.post_stream.stream[i + $scope.postCount];
                    } else {
                        break;
                    }
                }
                // iterate postCount
                $scope.postCount += 20;

                // fetch posts and add to posts array
                FactoryTopic.getPosts($scope.topic.id, request).success(function (data) {
                    $scope.topic.post_stream.posts.push.apply($scope.topic.post_stream.posts, data.post_stream.posts);
                    $scope.FormatImages();
                })
            }
        };
        $scope.init();
    });