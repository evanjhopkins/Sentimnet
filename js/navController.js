storganManley.controller('navController', function($scope, ErrorService) {
	$scope.showError = false;
	$scope.error = ErrorService;

	$scope.homeBtn = function(){
		$( "#homeBtn" ).addClass("active");
		$( "#chartBtn" ).removeClass("active");
		$scope.error.message="";
	};
	$scope.chartBtn = function(){
		 $( "#homeBtn" ).removeClass("active");
                $( "#chartBtn" ).addClass("active");
		$scope.error.message="";
	};

	$scope.submitBtn = function(){
		$scope.error.message="";
		var textArea = $("#postInput");
		var submitModal = $("#submitModal");
		var submitModalWrapper = $("#submitModalWrapper");

		textArea.value = "butts";
		if(submitModal.is(":visible")){
			submitModal.hide();
			submitModalWrapper.hide();
		}else{
			submitModal.fadeIn();
			submitModalWrapper.fadeIn();
		}
	};



});
