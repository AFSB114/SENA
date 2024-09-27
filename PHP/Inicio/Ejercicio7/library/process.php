<?php
$diasTra = 30;
$valorDia = 10000;
$salario = $diasTra * $valorDia;
$salud = $salario * 0.12;
$pension = $salario * 0.16;
$arl = $salario * 0.052;
var_dump($salud, $pension, $arl);
echo '<br>';

$desc = $salud + $pension + $arl;
$salario = $salario - $desc;
var_dump($salario);
