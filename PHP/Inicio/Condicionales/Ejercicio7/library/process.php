<?php
$nota1 = 2.5;
$nota2 = 4.5;
$nota3 = 5;

$porNota1 = $nota1 * 0.2;
$porNota2 = $nota2 * 0.35;
$porNota3 = $nota3 * 0.45;
var_dump($porNota1, $porNota2, $porNota3);

$suma = $porNota1 + $porNota2 + $porNota3;
var_dump($suma);

if ($suma > 4.5) {
    var_dump('La nota es superior');
} elseif ($suma > 3.5) {
    var_dump('La nota es bunea');
} elseif ($suma >= 3) {
    var_dump('La nota es media');
} else {var_dump('La nota es mala');
}
