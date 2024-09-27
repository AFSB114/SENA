<?php
function areas($figura, $base, $altura) {
    if ($figura == 'Cuadrado'){
        return $base ** 2;
    } else if($figura == 'Rectangulo'){
        return $base * $altura;
    } else if ($figura == 'Triangulo'){
        return $base * $altura / 2;
    } else {
        return 'Figura no valida';
    }
}