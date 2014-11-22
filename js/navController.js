storganManley.controller('navController', function($scope) {
	$scope.title = "Sentim.Net";
	$scope.showError = false;
	$scope.error = "~ not set: error should not be showing ~";

	$scope.homeBtn = function(){
		$scope.error = "clicked home";
		$scope.showError = true;
	};
	$scope.chartBtn = function(){
		$scope.error = "clicked chart";
		$scope.showError = true;
	};

	$scope.submitBtn = function(){
		var submitModal = $("#submitModal");
		var submitModalWrapper = $("#submitModalWrapper");
		if(submitModal.is(":visible")){
			submitModal.hide();
			submitModalWrapper.hide();
		}else{
			submitModal.show();
			submitModalWrapper.show();
		}
	};


});