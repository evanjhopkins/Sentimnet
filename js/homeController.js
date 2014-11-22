var storganManley = angular.module('storganManley', []);

storganManley.factory("ErrorService", function(){
    return {message: ""}
});

storganManley.factory("PostService", function(){
    return {posts: ["I am a post from a service", "test"]}
});

storganManley.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })

        // route for the submission page
        .when('/chart', {
            templateUrl : 'pages/chart.html',
            controller  : 'chartController'
        })

        // // route for the chart page
        // .when('/about', {
        //     templateUrl : 'pages/about.html',
        //     controller  : 'aboutController'
        // });
});


storganManley.controller('homeController', function($scope, PostService, ErrorService) {
    var dummyPosts = [
        "This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession.",
        "This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession.",
        "This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an exaddmple of a confession. This is an exdddample of a confession. This is an example of a confession. This is an example of a confession. This is an example of a confession."
    ]
	$scope.percent = '75%';
    $scope.posts = PostService;
    $scope.error = ErrorService;
    $scope.dropdownSelection = "Recentt";


    $scope.loadMoreBtn = function(){
        $scope.posts.posts.push("test");
        $scope.posts.posts.push("test");
        $scope.posts.posts.push("test");
        $scope.posts.posts.push("test");
        $scope.posts.posts.push("test");
        
    };
    var lastSort = 0;
    $scope.sort = function(sortID){
        lastSort = sortID;
        switch(sortID) {
            case 0:
                $scope.dropdownSelection = "Recent";
                break;
            case 1:
                $scope.dropdownSelection = "Positive";
                break;
            case 2:
                $scope.dropdownSelection = "Negative";
                break;
            default:
                $scope.sort(lastSort);
        }
    };
});