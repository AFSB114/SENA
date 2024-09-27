<?php
$lado1 = 5;
$lado2 = 16;
$lado3 = 14;

$cuad1 = $lado1 ** 2;
$cuad2 = $lado2 ** 2;
$cuad3 = $lado3 ** 2;

if ($cuad1 == $cuad2 && $cuad2 == $cuad3 && $cuad3 == $cuad1) {
    var_dump('Sona iguales');
} else if ($cuad1 > $cuad2 && $cuad1 > $cuad3) {
    var_dump('El cuadrado 1 es mayor');
} elseif ($cuad2 > $cuad1 && $cuad2 > $cuad3) {
    var_dump('El cuadrado 2 es mayor');
} else {
    var_dump('El cuadrado 3 es mayor');
}
