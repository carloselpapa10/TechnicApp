<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *"); 

$id = $_REQUEST['sId'];
$image = $_REQUEST['sImage'];

$t = new technic();
echo $t->changePhoto($id, $image);

include("database/close_connection.php");
/*
http://localhost/TechnicAppServer/ChangePhoto.php?sId=1010&sImage=xxxx
*/
?>

