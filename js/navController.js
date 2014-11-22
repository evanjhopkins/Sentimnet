storganManley.controller('navController', function($scope, ErrorService) {
	$scope.title = "Sentim.Net";
	$scope.showError = false;
	$scope.error = ErrorService;

	$scope.homeBtn = function(){
		
	};
	$scope.chartBtn = function(){
	
	};

	$scope.submitBtn = function(){
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


});