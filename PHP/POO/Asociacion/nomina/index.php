<?php
include 'library/empleado.php';
include 'library/nomina.php';

$empleado = new Empleado(1,'Juan','Pérez','Desarrollador',100000,30);

$nomina = new Nomina($empleado);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?= $nomina->calcSalario()?><br>
    <?= $nomina->calcSubTrans()?><br>
    <?= $nomina->calcSalud()?><br>
    <?= $nomina->calcPension()?><br>
    <?= $nomina->calcArl()?><br>
    <?= $nomina->calcRetencion()?><br>
    <?= $nomina->calcPagoTot()?><br>
</body>
</html>