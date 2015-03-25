"use strict";angular.module("tekForumApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("tekForumApp").controller("MainCtrl",["$scope","FactoryCategory","FactoryTopic","$cookies",function(a,b,c,d){a.categoryList=d.categoryList?JSON.parse(d.categoryList):null,a.topicList=d.topicList?JSON.parse(d.topicList):null,a.GetCategories=function(){b.get().success(function(b){console.log(b),a.categoryList=b.category_list.categories,console.log(JSON.stringify(b.category_list.categories)),d.categoryList=JSON.stringify(b.category_list.categories)})},a.GetTopics=function(){c.getLatest().success(function(b){console.log(b),a.topicList=b.topic_list.topics,console.log(JSON.stringify(b.topic_list.topics)),d.topicList=JSON.stringify(b.topic_list.topics)})},a.init=function(){d["XSRF-TOKEN"]="M8JjiA4/pV6L2pR94qd4BQMoaCmLXsmgLks7xdNd+HA=",a.GetCategories(),a.GetTopics()},a.init()}]),angular.module("tekForumApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("tekForumApp").factory("FactoryCategory",["$http","ServerAddress",function(a,b){return{get:function(){return a.get(b+"categories.json")}}}]),angular.module("tekForumApp").factory("FactoryTopic",["$http","ServerAddress",function(a,b){return{get:function(){return a.get(b+"top.json")},getLatest:function(){return a.get(b+"latest.json")}}}]),angular.module("tekForumApp").factory("FactoryPost",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("tekForumApp").factory("FactoryUser",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("tekForumApp").factory("FactoryBadge",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("tekForumApp").factory("FactoryNotification",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("tekForumApp").factory("FactoryPrivateMessage",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("tekForumApp").constant("ServerAddress","https://forum.teksyndicate.com/");