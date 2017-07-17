<?php
header("Content-type: application/json;charset=utf-8");
require_once $_SERVER["DOCUMENT_ROOT"] . "/policy/util/config.php";
$db = DataBase::getInstance();
$subquery='select  a.* from question_type a order by a.id';
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

echo json_encode($result);


