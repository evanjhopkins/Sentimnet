<?php 
date_default_timezone_set("America/New_York");

function sendResponse($status = 200, $body = ''){
    header('Content-Type: application/json');
    echo json_encode($body);
}
//$db = new PDO('mysql:host=localhost;dbname=sentiment;user=storgan;password=manley');
$db = new PDO('mysql:host=localhost;dbname=sentiment', 'root', '');
	if( isset ($_POST['group_name']){
		$groupName = $_POST['group_name'];
	} else {
		$groupName = $_GET('group_name');
	}
        $queryStr = "INSERT INTO Groups (group_name) Values (?)";

    $query = $db->prepare($queryStr);
    $query->execute(array($groupName));
    $groups = $query->fetchAll(PDO::FETCH_ASSOC);
    sendResponse(200, $groups);
