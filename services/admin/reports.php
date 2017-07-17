<?php

header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/kyoto/util/config.php";


$db = DataBase::getInstance();
$query = 'select * from faq a  order by a.id desc';

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

echo json_encode($result);


