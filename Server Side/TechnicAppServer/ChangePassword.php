<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *");

$id = $_REQUEST['sId'];
$password1 = $_REQUEST['sPassword1'];
$password2 = $_REQUEST['sPassword2'];

/*Cifrar password*/
$password1 = md5('t1'+$password1);
$password2 = md5('t1'+$password2);

$t = new technic();
echo $t->changePassword($id, $password1, $password2);

include("database/close_connection.php");

/*
http://localhost/TechnicAppserver/ChangePassword.php?sId=1082941566&sPassword1=123456&sPassword2=654321
*/
?>