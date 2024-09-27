<?php
include 'library/operaciones.php';

$operaciones = new Operacion();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?= $operaciones->sumar(10,5)?><br>
    <?=$operaciones->restar(10,5)?><br>
    <?=$operaciones->multiplicar(10,5)?><br>
    <?=$operaciones->dividir(10,5)?><br>
</body>
</html>