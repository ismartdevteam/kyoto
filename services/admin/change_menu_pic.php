<?php
header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    $path=$request->path;
    $menu_id=$request->menu_id;



if (isset($path)&&isset($menu_id) ) {
    $db = DataBase::getInstance();

    $query = 'update menu a set a.img_src="'.$path.'" where a.id='.$menu_id.'';

    $dbData=mysqli_query($db,$query);
    
    if ($dbData) {
        $result = 1;
    } else {
         $result = 2;
    }

}
else
{
   $result = 0;
}
echo json_encode($result);


