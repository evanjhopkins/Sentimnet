<?php 

date_default_timezone_set("America/New_York");

function sendResponse($status = 200, $body = ''){
    header('Content-Type: application/json');
    echo json_encode($body);
}
// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

function callAPI($method, $url, $data = false)
{
    $curl = curl_init();

    switch ($method)
    {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);

            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_PUT, 1);
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }

    // Optional Authentication:
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, "username:password");

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);

    curl_close($curl);

    return $result;
}

$db = new PDO('mysql:host=localhost;dbname=sentiment', 'root', '');

if( isset($_POST['group_id'])) {
    $group_id = $_POST['group_id'];
    $post = $_POST['post'];
} else if($_GET['group_id'] ){
    $group_id = $_GET['group_id'];
    $post = $_GET['post'];
}

if( isset($group_id)  ){
    $sentimentAnalysis = callApi('post', 'https://api.idolondemand.com/1/api/sync/analyzesentiment/v1', array('apikey'=>'dbc76194-fc7e-4286-b828-4c32ba0a5cff', 'text'=>$post));
    $sentimentArr = json_decode($sentimentAnalysis, true);
    $sentiment = $sentimentArr["aggregate"]["score"];

    $queryStr = "INSERT INTO posts (post_text, group_id, post_sentiment) VALUES (?, ?, ?)";
    $query = $db->prepare($queryStr);
    $query->execute(array($post, $group_id, $sentiment));
    sendResponse(200);
} else {
    sendResponse(406, 'Either group_id or post is not set');
}

 ?>
