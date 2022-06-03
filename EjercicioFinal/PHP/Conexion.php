<?php
try {
    $mbd = new PDO('mysql:host=localhost;dbname=19100212;port=3307', 'root', '');
} catch (PDOException $t) {
    echo "Error Conexion";
    echo $t ->getMessage();
}
?>