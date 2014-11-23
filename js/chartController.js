storganManley.controller('chartController', function($scope) {
    $scope.title = "Chart Page";

    var ctx = $("#myChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx);
});