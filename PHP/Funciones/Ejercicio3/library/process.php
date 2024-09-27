<?php
function operacion($operacion,$num1,$num2){
    if ($operacion == 'suma' || $operacion == '+'){
        return sumar($num1,$num2);
    } else if ($operacion == 'resta' || $operacion == '-') {
        return restar($num1,$num2);
    } else if ($operacion == 'multiplicacion' || $operacion == '*' || $operacion == 'x') {
        return multiplicar($num1,$num2);
    } else if ($operacion == 'division' || $operacion == '/'){
        return dividir($num1,$num2);
    } else {
        return 'Operacion no valida';
    }
}

function sumar($num1, $num2) {
    return $num1 + $num2;
}

function restar($num1, $num2) {
    return $num1 - $num2;
}

function multiplicar($num1, $num2) {
    return $num1 * $num2;
}

function dividir($num1, $num2) {
    if ($num2 != 0) {
        return $num1 / $num2;
    } else {
        return "Error: Division by zero";
    }
}