<?php
header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$menu_id=$request->menu_id;
$title_mn=$request->title_mn;
$title_en=$request->title_en;
$desc_mn=$request->desc_mn;
$desc_en=$request->desc_en;
$tag_mn=$request->tag_mn;
$tag_en=$request->tag_en;
$img_src=$request->path;


if (isset($title_mn)&&isset($title_en)&&isset($tag_mn)&&isset($tag_en) &&isset($img_src)&&isset($desc_mn) &&isset($desc_en)  ) {

    $db = DataBase::getInstance();
    $query = 'insert into contents values (null,'.$menu_id.',"'.$title_en.'","'.$title_mn.'","'.$img_src.'","'.$desc_en.'","'.$desc_mn.'","'.$tag_en.'","'.$tag_mn.'")';
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


