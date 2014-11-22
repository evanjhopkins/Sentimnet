storganManley.controller('submitController', function($scope, PostService, ErrorService) {
    $scope.title = "Chart Page";
    $scope.postText = "";
	$scope.posts = PostService;
	$scope.error = ErrorService;
    
    $scope.submitBtn = function(){
    	
    	if(postValidate($scope.postText)){
    		$scope.posts.posts.unshift($scope.postText);
    		$scope.cancelBtn();
    	}else{
    		$scope.error.message = "You left the post field blank";
    		$scope.cancelBtn();
    	}
    };

    $scope.cancelBtn = function(){
    	var submitModal = $("#submitModal");
		var submitModalWrapper = $("#submitModalWrapper");
		submitModal.fadeOut();
		submitModalWrapper.fadeOut();
    };

    function postValidate(text){
    	if(!text){
    		return false;
    	}
    	return true
    }
});