<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *"); 

$payment_method = $_REQUEST['sPayment_method'];
$service = $_REQUEST['sService'];
$image = $_REQUEST['sImage'];
$location = $_REQUEST['sLocation'];
$id_user = $_REQUEST['sId_user'];
$id_product = $_REQUEST['sId_product'];

$t = new technic();
echo $t->generateService($payment_method,$service,$image,$location,$id_user,$id_product);

include("database/close_connection.php");
/*
http://localhost/TechnicAppServer/GenerateService.php?sPayment_method=1&sService=r&sImage=&sLocation=&sId_user=1010&sId_product=1
*/
?>

