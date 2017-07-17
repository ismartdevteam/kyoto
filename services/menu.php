<?php

header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";

if (isset($_GET["id"]) && isset($_GET['hl'])) {
    $id =$_GET["id"];
    $sel="";
    $menu="";
    switch ($_GET['hl']) {
        case 'en_US':

        $menu="a.title_en title ,a.sub_en  subtitle";
        break;
        case 'mn_MN':

        $menu="a.title_mn title ,a.sub_mn  subtitle";
        break;
        default:

        $menu="a.title_mn title ,a.sub_mn  subtitle";         
        break;
    }
    $db = DataBase::getInstance();

    $subquery='select a.id, a.img_src,'.$menu.' from menu a where a.menu_id='.$id.' order by a.id';


    $subdata=mysqli_query($db,$subquery);
    $data = array();
    while ($row = mysqli_fetch_assoc($subdata)) {
        $data[] = $row;

    }
    if (count($data) < 1) {
        $result = Error_message::Error_number(1001);
    } else {
        $result = Error_message::Error_number(1000);
        $result["data"] = $data;
    }

}
else
{
   $result = Error_message::Error_number(1);
}
echo json_encode($result);


