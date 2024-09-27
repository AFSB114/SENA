<?php
function edades($anioNa, $person) {
    $edad = 2024 - $anioNa;
    if ($edad >= 18) {
        var_dump("La persona $person es mayor de edad");
        return $edad;
    } else {
        var_dump("La persona $person es menor de edad");
    }
        return $edad;
}