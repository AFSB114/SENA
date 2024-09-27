<?php
include 'library/operaciones.php';
include 'library/numero.php';

$num1 = new Numero(5);
$num2 = new Numero(10);

$operaciones = new Operaciones($num1, $num2);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?= $operaciones->sumar()?><br>
    <?= $operaciones->restar()?><br>
    <?= $operaciones->multiplicar()?><br>
    <?= $operaciones->dividir()?><br>
</body>

</html>