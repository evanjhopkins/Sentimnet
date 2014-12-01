<?php 
date_default_timezone_set("America/New_York");

function sendResponse($status = 200, $body = ''){
    header('Content-Type: application/json');
    echo json_encode($body);
}
//$db = new PDO('mysql:host=localhost;dbname=sentiment;user=storgan;password=manley');
$db = new PDO('mysql:host=localhost;dbname=sentiment', 'root', '');

if( isset($_POST['group_id'])) {
	$group_id = $_POST['group_id'];
	$sortBy = $_POST['sort_by'];
} else if (isset($_GET['group_id'])){
	$group_id = $_GET['group_id'];
	$sortBy = $_GET['sort_by'];
}

if( isset($group_id)){
	$count = isset($_POST['count'])    ?$_POST['count'] :10;
	$sortBy = isset($sortBy)           ?$sortBy :'most_recent';
	$after  = isset($_POST['after'])   ?$_POST['after'] :'';

	if($sortBy == 'positive'){
		$sortParam = 'post_sentiment DESC';
	} else if($sortBy == 'negative'){
		$sortParam = 'post_sentiment ASC';
	} else {
		$sortParam = 'post_date DESC';
	}
//	$queryStr = "SELECT p.*
//                    FROM posts p
//                    WHERE post_date > (NOW() - INTERVAL 1 DAY)
//		    AND group_id = ?
//					ORDER BY $sortParam;";
	$queryStr = "SELECT p.* 
					FROM posts p
					WHERE group_id = ?
					ORDER BY $sortParam;";

    $query = $db->prepare($queryStr);
    $query->execute(array($group_id));
    $posts = $query->fetchAll(PDO::FETCH_ASSOC);
    sendResponse(200, $posts);
} else {
   sendResponse(400, 'group_id missing');
}
?>
