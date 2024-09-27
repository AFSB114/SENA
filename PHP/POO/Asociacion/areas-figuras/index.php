<?php
include 'library/figura.php';
include 'library/areas.php';

$figura1 = new Figura(5,5);
$figura2 = new Figura(10,5);
$figura3 = new Figura(5,5);

$cuadrado = new Area($figura1);
$rectangulo = new Area($figura2);
$triangulo = new Area($figura3);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?= $cuadrado->calcAreaCuad()?><br>
    <?= $rectangulo->calcAreaRect()?><br>
    <?= $triangulo->calcAreaTria()?><br>
</body>
</html>