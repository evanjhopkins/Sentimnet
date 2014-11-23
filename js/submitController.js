storganManley.controller('submitController', function($scope, PostService, ErrorService) {
    $scope.title = "Chart Page";
    $scope.postText = "";
	$scope.posts = PostService;
	$scope.error = ErrorService;
    
    $scope.submitBtn = function(){
    	
    	if(postValidate($scope.postText)){
    		$scope.posts.posts.unshift({"text": $scope.postText, "date":"11/22/2014", "sentiment":45});
    		$scope.cancelBtn();
    	}else{
    		$scope.error.message = "You left the post field blank";
    		$scope.cancelBtn();
    	}
    	$scope.postText = "";
    };

    $scope.cancelBtn = function(){
    	var submitModal = $("#submitModal");
		var submitModalWrapper = $("#submitModalWrapper");
		submitModal.fadeOut();
		submitModalWrapper.fadeOut();
		$scope.postText = "";
    };

    function postValidate(text){
    	if(!text){
    		return false;
    	}
    	return true
    }
});