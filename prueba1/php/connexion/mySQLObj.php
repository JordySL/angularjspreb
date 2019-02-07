<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$dsn = 'mysql:dbname=sistemasoporte;host=localhost';
$usuario = 'root';
$contraseña = 'root';
try {
    $conn = new PDO($dsn, $usuario, $contraseña);
} catch (PDOException $e) {
    echo 'Falló la conexión: ' . $e->getMessage();
}
?>