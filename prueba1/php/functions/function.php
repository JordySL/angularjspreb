<?php
class funciones {
	function listQuery($tablaName) {
		include '../connexion/mySQLObj.php';
		$query = 'SELECT * FROM '.$tablaName;
		$result = $conn->prepare($query);
		if($result->execute())
		{
		 while($row = $result->fetch(PDO::FETCH_ASSOC))
		 {
		  $data[] = $row;
		 }	
		 echo json_encode($data);
		}
		die();
	}
	function getIdQuery($tablaName) {
		include '../connexion/mySQLObj.php';
		$query = 'SELECT Max(Id) as Id FROM '.$tablaName;
		$result = $conn->prepare($query);
		if($result->execute())
		{
		 while($row = $result->fetch(PDO::FETCH_ASSOC))
		 {
		  $data[] = $row;
		 }	
		 return json_encode($data[0]['Id'],JSON_NUMERIC_CHECK)+1;
		}
		die();
	}
	function insertPeticionQuery($value) {
		include '../connexion/mySQL.php';
		$query = 'INSERT INTO `peticiones`(`Id`, `FechaApertura`, `FechaVencimiento`, `IdTipo`, `IdCategoria`, `Solicitante`, `SolicitanteCorreo`, `Asignado`, `AsignadoCorreo`, `IdEstado`, `OrigenPeticion`, `Ubicacion`, `Titulo`, `Descripcion`) VALUES ('.$value.')';
		$result = mysqli_query($conn, $query);
		echo($query);
	}
	function insertCatalogoQuery($value) {
		include '../connexion/mySQL.php';
		$query = 'INSERT INTO `catalogo`(`Id`, `CatalogoNombre`, `TareaNombre`, `Estado`, `TiempoMaximoAtencion`) VALUES ('.$value.')';
		$result = mysqli_query($conn, $query);
		echo($result);
	}
}
?>