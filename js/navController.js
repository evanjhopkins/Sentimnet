storganManley.controller('navController', function($scope) {
	$scope.title = "Storgan Manley";
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
		$scope.error = "clicked submit";
		$scope.showError = true;
	};


});