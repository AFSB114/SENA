<?php
function edades($edad) {
    if ($edad >= 18) {
        return 'Mayor de edad';
    } else {
        return 'Mneor de edad';
    }
}