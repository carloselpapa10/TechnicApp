<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *"); 

$t = new technic();
echo $t->categoryList();

include("database/close_connection.php");

/*
http://localhost/TechnicAppServer/CategoryList.php
*/
?>
