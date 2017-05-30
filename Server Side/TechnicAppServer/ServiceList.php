<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *"); 

$user = $_REQUEST['sUser'];

$t = new technic();
echo $t->serviceList($user);

include("database/close_connection.php");

/*
http://localhost/TechnicAppServer/ServiceList.php?sUser=1010
*/
?>
