storganManley.controller('navController', function($scope, ErrorService) {
	$scope.title = "Sentim.Net";
	$scope.showError = false;
	$scope.error = ErrorService;

	$scope.homeBtn = function(){
		$scope.hideError();
	};
	$scope.chartBtn = function(){
		$scope.hideError();
	};

	$scope.submitBtn = function(){
		$scope.hideError();
		var submitModal = $("#submitModal");
		var submitModalWrapper = $("#submitModalWrapper");
		if(submitModal.is(":visible")){
			submitModal.hide();
			submitModalWrapper.hide();
		}else{
			submitModal.fadeIn();
			submitModalWrapper.fadeIn();
		}
	};

	$scope.hideError = function(){
		$scope.error.message="";
	}


});