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
    $nota1 = notas(4.5,0.2);
    $nota2 = notas(2.5,0.35);
    $nota3 = notas(3,0.45);

    $suma = $nota1 + $nota2 + $nota3;

    var_dump($suma);

    if ($suma > 4.5){
        var_dump('La nota es superior');
    } else if ($suma > 3.5) {
        var_dump('La nota es buena');
    } else if ($suma >= 3) {
        var_dump('La nota es media');
    } else {
        var_dump('La nota es mala');
    }
    ?>
</body>
</html>