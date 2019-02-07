<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = mysqli_connect('localhost','root','root','sistemasoporte') or die('Error al conectar con Servidor');
?>