<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *");

$id = $_REQUEST['sId'];
$name = $_REQUEST['sName'];
$lastname = $_REQUEST['sLastname'];
$username = $_REQUEST['sUsername'];
$password = $_REQUEST['sPassword'];
$phone = $_REQUEST['sPhone'];
$photo = $_REQUEST['sPhoto'];
$email = $_REQUEST['sEmail'];
$address = $_REQUEST['sAddress'];
$id_category = $_REQUEST['sId_category'];


/*Cifrar password*/
$password = md5('t1'+$password);

$t = new technic();
echo $t->register($id,$name,$lastname,$username,$password,$phone,$photo,$email,$address,$id_category);

include("database/close_connection.php");

/*
http://localhost/TechnicAppServer/Register.php?sId=401020&sName=Claudio&sLastname=DiSipio&sUsername=claudio&sPassword=123456&sPhone=3003940576&sPhoto=martha.jpg&sEmail=martha@gmail.com&sAddress=Laquila&sId_category=1
*/
?>

