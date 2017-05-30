<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *");

$id = $_REQUEST['sId'];
$t = new technic();
echo $t->recoveryPassword($id);

include("database/close_connection.php");
/*
http://localhost/TechnicAppServer/RecoveryPassword.php?sId=2020
*/
?>