var storganManley = angular.module('storganManley', []);

storganManley.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })

        // // route for the submission page
        // .when('/chart', {
        //     templateUrl : 'pages/chart.html',
        //     controller  : 'chartController'
        // })

        // // route for the chart page
        // .when('/submit', {
        //     templateUrl : 'pages/submit.html',
        //     controller  : 'submitController'
        // });
});


storganManley.controller('homeController', function($scope) {
    var dummyPosts = [
        "This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession.",
        "This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession.",
        "This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession."
    ]
	$scope.percent = '75%';
    $scope.posts = dummyPosts;

    $scope.loadMoreBtn = function(){
           $scope.posts.push("test");
    };
});
