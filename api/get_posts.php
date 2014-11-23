<?php 

date_default_timezone_set("America/New_York");

function sendResponse($status = 200, $body = ''){
    header('Content-Type: application/json');
    echo json_encode($body);
}

$db = new PDO('pgsql:host=54.148.105.214;dbname=sentiment;charset=utf8', 'ec2-user', 'storgan');

if( isset($_POST['group_id']) ){

	$group_id = $_POST['group_id'];
	$count = isset($_POST['count'])    ?$_POST['count'] :10;
	$sortBy = isset($_POST['sort_by']) ?$_POST['count'] :'most_recent';
	$after  = isset($_POST['after'])   ?$_POST['after'] :'';

	if($sortBy == 'positive'){
		$sortParam = 'post_sentiment DESC';
	} else if($sortBy == 'negative'){
		$sortParam = 'post_sentiment ASC';
	} else {
		$sortParam = 'post_time DESC';
	}
	$queryStr = "SELECT p.*, group_name
                    FROM posts p, groups g
                    WHERE post_time > (now() - INTERVAL 1 DAY)
                    ORDER BY $sortParam";

    $query = $this->db->prepare($queryStr);
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
	sendResponse(200, posts);
}
sendResponse(400, 'group_id missing');

 ?>
