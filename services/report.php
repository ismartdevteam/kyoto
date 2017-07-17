<?php
header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$name=$request->name;
$email=$request->email;
$report=$request->report;
if (isset($name) && isset($email) && isset($report)) {

	$db = DataBase::getInstance();
	$query = 'insert into faq values (null,"'.$name.'","'.$email.'","'.$report.'",CURRENT_TIMESTAMP)';

	$dbData=mysqli_query($db,$query);

	if ($dbData) {
		$result = Error_message::Error_number(1000);
	} else {
		$result = Error_message::Error_number(1003);
	}
}   
else
{
	$result = Error_message::Error_number(1);
}
echo json_encode($result);


