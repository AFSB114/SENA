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
   $nota1 = notas(4.3,0.3);
   $nota2 = notas(3,0.3);
   $nota3 = notas(3.5,0.4);
   var_dump(suma($nota1, $nota2, $nota3));
   ?> 
</body>
</html>