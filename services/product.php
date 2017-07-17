<?php

header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";

if ( isset($_GET['hl'])) {

    $sel="";
    switch ($_GET['hl']) {
        case 'en_US':
        $sel='a.title_en title,a.desc_en description';

        break;
        case 'mn_MN':
        $sel='a.title_mn title,a.desc_mn description';

        break;
        default:
        $sel='a.title_mn title,a.desc_mn description';
    
        break;
    }
    $db = DataBase::getInstance();
    $query = 'select a.id, a.img_src,'.$sel.',a.price from product a  order by a.id';

    $dbData=mysqli_query($db,$query);

    $data = array();
    while ($row = mysqli_fetch_assoc($dbData)) {
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


