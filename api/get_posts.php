<?php 

date_default_timezone_set("America/New_York");

function sendResponse($status = 200, $body = ''){
    header('Content-Type: application/json');
    echo json_encode($body);
}

class SentimentAPI {

    private $db;

    function __construct() {
        $this->db = new PDO('pgsql:host=54.148.105.214;dbname=sentiment;charset=utf8', 'manley', 'storgan');
    }

    function jsonEncode($text){
        static $from = array("\\", "/", "\n", "\t", "\r", "\b", "\f", '"');
        static $to = array('\\\\', '\\/', '\\n', '\\t', '\\r', '\\b', '\\f', '\"');
        return str_replace($from, $to, $text);
    }

    function __destruct() {
        // $this->db->close();
    }

    function createGroup(){
        if( isset($_POST['group_name']) ){
            $queryStr = "INSERT INTO groups (group_name, group_latitude, group_longitude) VALUES (?, 0.0, 0.0)";
            $query = $this->db->prepare($queryStr);
            $query->execute(array($group_name));
        }
    }

    function submitPost(){
    	if( isset($_POST['group_id']) && isset($_POST['post']) ){
    		$post = $_POST['post'];
    		$group_id = $_POST['group_id'];
    		$sentiment = 1.0;

    		$queryStr = "INSERT INTO posts (post_text, group_id, post_sentiment) VALUES (?, ?, ?)";
    		$query = $this->db->prepare($queryStr);
	        $query->execute(array($post, $group_id, $sentiment));
    	}
    }

    function getPosts($group, $after='', $count=10, $sortBy='most_recent'){
    	if( isset($_POST['group_id']) ){

			$group_id = $_POST['group_id'];
    		$count = isset($_POST['count']) ?$_POST['count'] ?10;
    		$sortBy = isset($_POST['sort_by']) ?$_POST['count'] :'most_recent';
   			$after = isset($_POST['after']) ?$_POST['after']) ?'';

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
    }

$api = new SentimentAPI;
$api->getPosts();

 ?>
