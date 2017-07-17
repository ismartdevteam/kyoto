<?php
header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

       $path=$request->path;

 

if (isset($path)  ) {
  
    $db = DataBase::getInstance();
    $query = 'insert into imageSlider values (null,"'.$path.'")';

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


