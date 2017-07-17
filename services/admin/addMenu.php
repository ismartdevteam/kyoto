<?php
header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

       $menu_id=$request->menu_id;
    $title_mn=$request->title_mn;
    $title_en=$request->title_en;
    $sub_mn=$request->sub_mn;
    $sub_en=$request->sub_en;
 

if (isset($title_mn)&&isset($title_en)&&isset($sub_mn)&&isset($sub_en)  ) {
  
    $db = DataBase::getInstance();
    $query = 'insert into menu values (null,'.$menu_id.',"'.$title_mn.'","'.$title_en.'"," ","'.$sub_mn.'","'.$sub_en.'")';

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


