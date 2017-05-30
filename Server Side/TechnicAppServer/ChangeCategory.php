<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *"); 

$id = $_REQUEST['sId_user'];
$id_category = $_REQUEST['sIdCategory'];

$t = new technic();
echo $t->changeCategory($id,$id_category);

include("database/close_connection.php");

/*
http://localhost/TechnicAppServer/ChangeCategory.php?sId_user=1082941566&sIdCategory=1
*/
?>
