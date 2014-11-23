<?php 
date_default_timezone_set("America/New_York");

function sendResponse($status = 200, $body = ''){
    header('Content-Type: application/json');
    echo json_encode($body);
}
//$db = new PDO('mysql:host=localhost;dbname=sentiment;user=storgan;password=manley');
$db = new PDO('mysql:host=localhost;dbname=sentiment', 'root', '');

	$queryStr = "SELECT * FROM Groups*";

    $query = $db->prepare($queryStr);
    $query->execute();
    $posts = $query->fetchAll(PDO::FETCH_ASSOC);
    sendResponse(200, $posts);
?>
