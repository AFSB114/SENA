<?php
include 'library/saludo.php';

$saludo = new Saludo();
$saludo->setSaludar('Hello World');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?= $saludo->getSaludar() ?>
</body>

</html>