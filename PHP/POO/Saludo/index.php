<?php
include 'library/greet.php';

$saludo = new Saludo();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?= $saludo->saluda('Hello World') ?>
</body>

</html>