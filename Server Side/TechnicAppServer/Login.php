<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *");

$username = $_REQUEST['sUsername'];
$password = $_REQUEST['sPassword'];

/*Cifrar password*/
$password = md5('t1'+$password);

$t = new technic();
echo $t->login($username,$password);

include("database/close_connection.php");

/*
http://localhost/TechnicAppServer/Login.php?sUsername=carloselpapa&sPassword=123456
*/
?>