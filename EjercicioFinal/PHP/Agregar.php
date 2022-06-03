<?php
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
    $consultasql= "INSERT INTO `empleado`(`Nombre`, `Ap_Paterno`, `Ap_Materno`, `Estado_Civil`, `Tipo_Empleo`, `Correo_Per`, `Telefono`, `Correo_Emp`, `Contrasena`) VALUES ('$Nombre','$Ap_Paterno','$Ap_Materno','$Estado_Civil','$Tipo_Empleo','$Correo_Per','$Telefono','$Correo_Emp','$Contraseña')";
    $consulta = $mbd ->prepare($consultasql);
    $consulta ->execute();
    $consulta ->closeCursor();
} catch (PDOException $th) {
    echo "Error BD";
    echo $th ->getMessage();
};
?>