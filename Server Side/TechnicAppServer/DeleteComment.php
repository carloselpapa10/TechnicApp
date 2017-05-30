<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *");

$id = $_REQUEST['sIdComment'];
$id_user = $_REQUEST['sId_user'];

$t = new technic();
echo $t->deleteComment($id,$id_user);

include("database/close_connection.php");
/*
http://localhost/TechnicAppServer/DeleteComment.php?sIdComment=4&sId_user=1082941566
*/
?>