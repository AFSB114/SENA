<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    include 'library/process.php';
    $edad1 = edades(1999,1);
    $edad2 = edades(2018,2);
    $edad3 = edades(2007,3);

    $prom = ($edad1 + $edad2 + $edad3) / 3;

    if ($prom >= 18) {
        var_dump('El promedio cumple con la mayoria de edad');
    } else {
        var_dump('El promedio no cumple con la mayoria de edad');
    }
    ?>
</body>
</html>