<?php
$diasTra = 30;
$valDia = 100000;

$salario = $diasTra * $valDia;
var_dump($salario);

$salMin = 1300000;

if ($salario > $salMin * 4) {
    $salario *= 0.96;
} else {
    $salario *= 1;
}

if ($salario < $salMin * 2) {
    $salario += 80000;
} else {
    $salario += 0;
}

$salud=$salario*0.12;
$pension=$salario*0.16;
$arl=$salario*0.052;
var_dump($salud,$pension,$arl);

$deducible= $salud+$pension+$arl;
$salario-=$deducible;
var_dump($salario);