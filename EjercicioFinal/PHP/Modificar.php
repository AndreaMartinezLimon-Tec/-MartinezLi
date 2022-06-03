<?php
$iduser=$_POST['par1'];
$Nombre = $_POST['par2'];
$Ap_Paterno = $_POST['par3'];
$Ap_Materno = $_POST['par4'];
$Estado_Civil = $_POST['par5'];
$Tipo_Empleo = $_POST['par6'];
$Correo_Per = $_POST['par7'];
$Telefono = $_POST['par8'];
$Correo_Emp = $_POST['par9'];
$Contraseña = $_POST['par10'];
include ("Conexion.php");

try {
    $consultasql="UPDATE `empleado` SET `Nombre`='$Nombre',`Ap_Paterno`='$Ap_Paterno',`Ap_Materno`='$Ap_Materno',`Estado_Civil`='$Estado_Civil',`Tipo_Empleo`='$Tipo_Empleo',`Correo_Per`='$Correo_Per',`Telefono`='$Telefono',`Correo_Emp`='$Correo_Emp',`Contrasena`='$Contraseña' WHERE ID=".$iduser;
    $consulta = $mbd ->prepare($consultasql);
    $consulta ->execute();
    $resultado = $consulta ->fetch(PDO::FETCH_ASSOC);
    $consulta ->closeCursor();
} catch (PDOException $th) {
    echo "Error BD";
    echo $th ->getMessage();
}
echo json_encode($resultado);
?>