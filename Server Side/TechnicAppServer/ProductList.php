<?php
include("database/open_connection.php");
require_once("technic.php");

header("Access-Control-Allow-Origin: *"); 

$id_category = $_REQUEST['sId_category'];

$t = new technic();
echo $t->productList($id_category);

include("database/close_connection.php");

/*
http://localhost/TechnicAppServer/ProductList.php?sId_category=1
*/
?>
