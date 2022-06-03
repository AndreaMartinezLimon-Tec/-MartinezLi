<?php
$iduser=$_POST['par1'];
include ("Conexion.php");

try {
    $consultasql= "DELETE FROM `empleado` WHERE ID=".$iduser;
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