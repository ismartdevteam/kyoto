<?php 
header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";
$user=json_decode(file_get_contents('php://input'));
$username=$user->name;
$password=$user->pass;
$status=0;
if(isset($username) && isset($password)){
	$db = DataBase::getInstance();
	$query='select username from admin where username="'.$username.'" and password="'.$password.'"';
	$dbData=mysqli_query($db,$query);

	if($dbData){
		$rowcount=mysqli_num_rows($dbData);
		if($rowcount==1){
			if(!isset($_SESSION)){
				session_start();
			}
			$_SESSION['uid']=uniqid('ang_');
			$status=$_SESSION['uid'];
		}
		echo json_encode($status);
	}

} 

?>