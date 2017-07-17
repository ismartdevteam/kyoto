<?php

header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";

if (isset($_GET["id"])) {
    $id =$_GET["id"];
 
    $db = DataBase::getInstance();
    $query = 'delete from contents where id='.$id.'';
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


