<?php

$hotsdb = "localhost";    // nombre o direccion ip del servidor
$database = "technic_bd";    // nombre de la BD

$user = "root";    // usuarios de la BD
$password = "";    // contraseña de la BD

// Fin de los parametros a configurar para la conexion de la base de datos

$connection_db = mysql_connect("$hotsdb","$user","$password")
    or die ("Conexión denegada, el Servidor de Base de datos que solicitas NO EXISTE");
    $db = mysql_select_db("$database", $connection_db)
    or die ("La Base de Datos <b>$database</b> NO EXISTE");
?>

