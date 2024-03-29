storganManley.factory("PercentService", function(){
    return {value: 0.0}
});

storganManley.controller('chartController', function($scope, PercentService) {
    $scope.title = "Chart Page";
$scope.percentService = PercentService;
    var ctx = $("#myChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    //
    var data = {
    labels: ["May","",  "June","", "July","", "August","", "September","", "October","", "November",""],
	datasets: [
        {
            label: "Sentiment",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [65, 35, 59, 77, 80, 62, 81,56,  56, 76, 55, 22, 40, $scope.percentService.value]

	}
    ]
};

var options = {

   scaleOverride: true,
    scaleSteps: 20,
    scaleStepWidth: Math.ceil(100 / 10),
    scaleStartValue: -100,

     //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,
    
            //String - Colour of the grid lines
                scaleGridLineColor : "rgba(0,0,0,.05)",
    
                    //Number - Width of the grid lines
                        scaleGridLineWidth : 1,
    
                            //Boolean - Whether the line is curved between points
                                bezierCurve : true,
    
                                    //Number - Tension of the bezier curve between points
                                        bezierCurveTension : 0.4,
    
                                            //Boolean - Whether to show a dot for each point
                                                pointDot : true,
    
                                                    //Number - Radius of each point dot in pixels
                                                        pointDotRadius : 4,
   
                                                            //Number - Pixel width of point dot stroke
                                                                pointDotStrokeWidth : 1,
    
                                                                    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                                                                        pointHitDetectionRadius : 20,
    
                                                                            //Boolean - Whether to show a stroke for datasets
                                                                                datasetStroke : true,
    
                                                                                    //Number - Pixel width of dataset stroke
                                                                                        datasetStrokeWidth : 2,
    
                                                                                            //Boolean - Whether to fill the dataset with a colour
                                                                                                datasetFill : true,
    
                                                                                                    //String - A legend template
                                                                                                        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    
                                                                                                        };
	var myLineChart = new Chart(ctx).Line(data, options);
});
