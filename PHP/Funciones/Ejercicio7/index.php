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
   var_dump(areas('Cuadrado', 2, 2));
   var_dump(areas('Rectangulo', 3, 2));
   var_dump(areas('Triangulo', 3, 2));
   ?> 
</body>
</html>