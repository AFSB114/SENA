<?php
function edades($anioNa) {
    $edad = 2024 - $anioNa;
    if ($edad >= 18) {
        return 'Mayor de edad';
    } else {
        return 'Mneor de edad';
    }
}