<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *");

$id = $_REQUEST['sId'];
$t = new technic();


echo '{"new_password":"'.$t->recoveryPassword($id).'"}';
/*
if($t->recoveryPassword($id) != 0){
	echo '{"new_password":'.$t->recoveryPassword($id).'}';
}else{
	echo 0;
}*/

include("database/close_connection.php");
/*
http://localhost/TechnicAppServer/RecoveryPassword.php?sId=2020
*/
?>