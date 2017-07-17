<?php

header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/customs/util/config.php";
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


$menu_id=$request->menu_id;
$hl=$request->hl;

if (isset($menu_id)&& isset($hl) ) {
    
    $db = DataBase::getInstance();
    $query = 'insert into ttrvhscd values (null,"'.$chapter.$header.$sheader.$stateCode.'","'.$mn.'" ,
        "'.$en.'","'.$ru.'","'.$quantity.'", "'.$exp.'","N","'.$chapter.'","'.$header.'","'.$sheader.'","'.$stateCode.'" ,"'.$open.'")';

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


