<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *"); 

$message = $_REQUEST['sMessage'];
$id_user = $_REQUEST['sIdUser'];
$id_attention_service = $_REQUEST['sId_attention_service'];

$t = new technic();
echo $t->addComment($message,$id_user,$id_attention_service);

include("database/close_connection.php");
/*
http://localhost/TechnicAppServer/AddComment.php?sMessage=Hello&sIdUser=1082941566&sId_attention_service=1
*/
?>