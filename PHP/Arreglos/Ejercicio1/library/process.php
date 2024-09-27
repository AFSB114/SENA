<?php
$arreglo = [];
$arreglo = [1, 2, 3, 4, 5];

$num1 = $arreglo[0];
$num2 = $arreglo[2];
$num3 = $arreglo[4];

// var_dump($num1, $num2, $num3);

// $cantDatos = count($arreglo);
// for ($iterar = 0; $iterar < $cantDatos; $iterar++) {
//     var_dump($arreglo[$iterar]);
// }

foreach($arreglo as $elemento){
    var_dump($elemento);
}