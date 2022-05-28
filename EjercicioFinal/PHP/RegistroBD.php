<?php
$iduser=$_POST['par'];

try {
    $mbd = new PDO('mysql:host=localhost;dbname=19100212;port=3307', 'root', '');
} catch (PDOException $t) {
    echo "Error Conexion";
    echo $t ->getMessage();
}
try {
    $consultasql= "SELECT `ID`, `Nombre`, `Ap_Paterno`, `Ap_Materno`, `Estado_Civil`, `Tipo_Empleo`, `Correo_Per`, `Telefono`, `Correo_Emp`, `Contraseña` FROM `empleado` WHERE ID=".$iduser;
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