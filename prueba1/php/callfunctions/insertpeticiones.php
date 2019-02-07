<?php
	include("../functions/function.php");
	$data = file_get_contents("php://input");

	$Peticion = ['Id','FechaApertura','FechaVencimiento','IdTipo','IdCategoria','Solicitante','SolicitanteCorreo','Asginado','AsginadoCorreo','IdEstado','OrigenPeticion','Ubicacion','Titulo','Descripcion'];

	$d = json_decode($data, true);	
	$dt = new funciones();
	$d[$Peticion[0]] = $dt->getIdQuery('peticiones');
	$PeticionObj = $d[$Peticion[0]].',"'.$d[$Peticion[1]].'","'.$d[$Peticion[2]].'",'.$d[$Peticion[3]].','.$d[$Peticion[4]].',"'.$d[$Peticion[5]].'","'.$d[$Peticion[6]].'","'.$d[$Peticion[7]].'","'.$d[$Peticion[8]].'",'.$d[$Peticion[9]].',"'.$d[$Peticion[10]].'","'.$d[$Peticion[11]].'","'.$d[$Peticion[12]].'","'.$d[$Peticion[13]].'"';	
	$dt->insertPeticionQuery($PeticionObj);
?>