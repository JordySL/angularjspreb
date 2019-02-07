<?php
	include("../functions/function.php"); 
	$data = file_get_contents("php://input");

	$Catalogo = ['Id','CatalogoNombre','TareaNombre','Estado','TiempoMaximoAtencion'];

	$d = json_decode($data, true);
	$dt = new funciones();
	$d[$Catalogo[0]] = $dt->getIdQuery('catalogo');
	$CatalogoObj = $d[$Catalogo[0]].',"'.$d[$Catalogo[1]].'","'.$d[$Catalogo[2]].'",'.$d[$Catalogo[3]].','.$d[$Catalogo[4]];
	$dt->insertCatalogoQuery($CatalogoObj);
?>

