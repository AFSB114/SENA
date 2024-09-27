<?php
$anioNa1 = 1990;
$anioNa2 = 2008;
$anioNa3 = 2007;
$anioAc = 2024;

$edad1 = $anioAc - $anioNa1;
$edad2 = $anioAc - $anioNa2;
$edad3 = $anioAc - $anioNa3;

if ($edad1 > 17) {
    var_dump('La persona 1 es mayor de edad');
} else {
    var_dump('La persona 1 es menor de edad');
}

if ($edad2 >= 18) {
    var_dump('La persona 2 es mayor de edad');
} else {
    var_dump('La persona 2 es menor de edad');
}

if ($edad2 <= 17) {
    var_dump('La persona 3 es menor de edad');
} else {
    var_dump('La persona 3 es mayor de edad');
}

$prom = ($edad1 + $edad2 + $edad3) / 3;

if($prom<18){
    var_dump('El promedio no cumple con la mayoria de edad');
}else{
    var_dump('El promedio cumple con la mayoria de edad');
}