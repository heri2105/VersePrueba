<?php 
session_start();
set_time_limit(90);
include('./../connect.php');

$con = @mysqli_connect('localhost', 'root', '', 'verse');
mysqli_set_charset($con,"utf8");
if (!$con) {
    echo "Error: " . mysqli_connect_error();
	exit();
}
//echo 'Connected to MySQL';


 if (isset($_POST['consultaInicial'])){
     $sql 	= 'SELECT Id_Proveedor,RFC,PrincipalName,BusinessName,Phone,EMAIL,CreatedDate FROM `Proveedores` limit 100';
     $query 	= mysqli_query($con, $sql);
     while ($row = mysqli_fetch_array($query)){
         $orders22[] = array(
			'id_proveedor'       => $row['Id_Proveedor'],
			'rfc'                => $row['RFC'],
			'principalname'      => $row['PrincipalName'],
			'businessname'       => $row['BusinessName'],
			'phone'              => $row['Phone'],
			'EMAIL'              => $row['EMAIL'],
			'createddate'        => $row['CreatedDate'],
		);
		
     }
     echo json_encode($orders22);
 }

 if (isset($_POST['consultarfc'])){
     $sql 	= "SELECT Id_Proveedor,RFC,PrincipalName,BusinessName,Phone,EMAIL,CreatedDate FROM Proveedores where RFC like '%".$_POST['valor']."%'";
     $query 	= mysqli_query($con, $sql);
     while ($row = mysqli_fetch_array($query)){
         $orders22[] = array(
			'id_proveedor'       => $row['Id_Proveedor'],
			'rfc'                => $row['RFC'],
			'principalname'      => $row['PrincipalName'],
			'businessname'       => $row['BusinessName'],
			'phone'              => $row['Phone'],
			'EMAIL'              => $row['EMAIL'],
			'createddate'        => $row['CreatedDate'],
		);
		
     }
     echo json_encode($orders22);
 }

 if (isset($_POST['guardar'])){
   //  echo "guardar";
     
     $rfcnuevo =    $_POST['rfcNuevo'];
     $principal =   $_POST['principalNuevo'];
     $busines =     $_POST['businessNuevo'];
     $phone =       $_POST['phoneNuevo']; 
     $email =       $_POST['emailNuevo'];
     
     $sql = "INSERT INTO `proveedores`( `RFC`, `PrincipalName`, `BusinessName`, `Phone`, `EMAIL`, `CreatedDate`) VALUES ('".$rfcnuevo."','".$principal."','".$busines."',".$phone.",'".$email."',now())";
     
   //  mysqli_query($con, $sql);
    if ($con->query($sql) === TRUE) {
       header('Location: ./../index.php');
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }
     
     
 }
if (isset($_POST['update'])){  
    $sql = "UPDATE proveedores SET RFC='".$_POST['rfcEditar']."',PrincipalName='".$_POST['principalEditar']."',BusinessName='".$_POST['businessEditar']."',Phone=".$_POST['phoneEditar'].",EMAIL='".$_POST['emailEditar']."' WHERE Id_Proveedor =".$_POST['idregistros']."";
    if ($con->query($sql) === TRUE) {
       header('Location: ./../index.php');
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }
}

if (isset($_POST['delete'])){  
    $sql = "DELETE FROM `proveedores` WHERE Id_Proveedor = ".$_POST['idregEliminar']."";
    if ($con->query($sql) === TRUE) {
       header('Location: ./../index.php');
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }
}




?>