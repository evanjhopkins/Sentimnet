storganManley.controller('submitController', function($http, $scope, PostService, ErrorService) {
    $scope.postText = "";
	$scope.posts = PostService;
	$scope.error = ErrorService;
    
    $scope.submitBtn = function(){
    	
    	if(postValidate($scope.postText)){
    		$scope.posts.posts.unshift({"text": $scope.postText, "date":"11/22/2014", "sentiment":45});
    		submitPost($scope.postText);
		$scope.cancelBtn();
    	}else{
    		$scope.error.message = "You left the post field blank";
    		$scope.cancelBtn();
    	}
    	$scope.postText = "";
		var url = document.URL;
		var hashIndex = url.indexOf("#");
		var route = url.substring(hashIndex+2, url.length);
		if(route=="chart"){
			$("#homeBtn").trigger( "click" );
			window.location.href = '#/';
		}
    };

    $scope.cancelBtn = function(){
    	var submitModal = $("#submitModal");
		var submitModalWrapper = $("#submitModalWrapper");
		submitModal.fadeOut();
		submitModalWrapper.fadeOut();
		$scope.postText = "";
    };
function submitPost(postText){  
//  $scope.update = function() {
        $http.get('/api/submit_post.php?group_id=1&post='+encodeURIComponent(postText)).    
    success(function(data, status, headers, config) {
        
        }).
            error(function(data, status, headers, config) {
            console.log("error");
        });
            }

    function postValidate(text){
    	if(!text){
    		return false;
    	}
    	return true
    }
});
