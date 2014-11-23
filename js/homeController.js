var storganManley = angular.module('storganManley', []);

storganManley.factory("ErrorService", function(){
    return {message: ""}
});

storganManley.factory("PostService", function(){
    return {posts: [ ]}
});

storganManley.config(function($routeProvider) {
    	$( "#homeBtn" ).addClass("active");
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


storganManley.controller('homeController', function(PercentService, $scope, PostService, ErrorService, $http) {
	$scope.percent = PercentService;
    $scope.posts = PostService;
    $scope.error = ErrorService;
    $scope.dropdownSelection = "Recent";
	update("most_recent");

	function update(sortType){	
//	$scope.update = function() {
        $http.get('/api/get_posts.php?group_id=1&sort_by='+sortType).    
	success(function(data, status, headers, config) {
			console.log(data);
			$scope.percent.value = 0.0;
			$scope.posts.posts = [];
		for (i = 0; i < data.length; i++) { 
			var newPost = data[i];
			$scope.posts.posts.push({"text":newPost.post_text , "date":newPost.post_date, "sentiment":newPost.post_sentiment});
			$scope.percent.value = $scope.percent.value + parseFloat(newPost.post_sentiment);
			console.log($scope.percent.value);
		}
		$scope.percent.value = $scope.percent.value / data.length;
		$scope.percent.value = Math.round($scope.percent.value * 100);
	    }).
            error(function(data, status, headers, config) {
            console.log("error");
		});
            }
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
		update("most_recent");
                $scope.dropdownSelection = "Recent";
                break;
            case 1:
		update("positive");
                $scope.dropdownSelection = "Positive";
                break;
            case 2:
		update("negative");
                $scope.dropdownSelection = "Negative";
                break;
            default:
                $scope.sort(lastSort);
        }
    };
});
