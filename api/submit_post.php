<?php 

date_default_timezone_set("America/New_York");

function sendResponse($status = 200, $body = ''){
    header('Content-Type: application/json');
    echo json_encode($body);
}

db = new PDO('pgsql:host=54.148.105.214;dbname=sentiment;charset=utf8', 'manley', 'storgan');

if( isset($_POST['group_id']) && isset($_POST['post']) ){
    $post = $_POST['post'];
    $group_id = $_POST['group_id'];
    $sentiment = 1.0;

    $queryStr = "INSERT INTO posts (post_text, group_id, post_sentiment) VALUES (?, ?, ?)";
    $query = $this->db->prepare($queryStr);
    $query->execute(array($post, $group_id, $sentiment));
    sendResponse(200)
}
sendResponse(406, 'Either group_id or post is not set');

 ?>