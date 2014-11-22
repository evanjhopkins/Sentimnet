storganManley.controller('submitController', function($scope, Posts) {
    $scope.title = "Chart Page";
    $scope.postText = "";
	$scope.posts = Posts;
    
    $scope.submitBtn = function(){
    	
    	if(postValidate($scope.postText)){
    		$scope.posts.posts.unshift($scope.postText);
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