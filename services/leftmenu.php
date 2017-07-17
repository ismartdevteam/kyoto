<?php

header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";

if (isset($_GET["id"]) && isset($_GET['hl'])) {
    $id =$_GET["id"];
    $sel="";
    $menu="";
    switch ($_GET['hl']) {
        case 'en_US':
        $sel='a.title_en title,a.description_en description,a.tag_en tag';
        $menu="a.title_en title ,a.sub_en  subtitle";
        break;
        case 'mn_MN':
        $sel='a.title_mn title,a.description_mn description,a.tag_mn tag';
        $menu="a.title_mn title ,a.sub_mn  subtitle";
        break;
        default:
        $sel='a.title_mn title,a.description_mn description,a.tag_mn tag';
        $menu="a.title_mn title ,a.sub_mn  subtitle";         
        break;
    }
    $db = DataBase::getInstance();
    $query = 'select a.id, a.img_src,'.$sel.' from contents a where a.menu_id='.$id.' order by a.id';
    $subquery='select a.id, a.img_src,'.$menu.' from menu a where a.id='.$id.' order by a.id';

    $dbData=mysqli_query($db,$query);
    $subdata=mysqli_query($db,$subquery);
    $data = array();
    $menuMain=mysqli_fetch_assoc($subdata);;
    while ($row = mysqli_fetch_assoc($dbData)) {
        $data[] = $row;

    }
    if (count($data) < 1) {

        if($menuMain!=null){
            $result = Error_message::Error_number(1000);
        }
        else{
           $result = Error_message::Error_number(1001);
       }
   } else {
    $result = Error_message::Error_number(1000);
    $result["data"] = $data;
}

$result["menu"]=$menuMain;


}
else
{
 $result = Error_message::Error_number(1);
}
echo json_encode($result);


