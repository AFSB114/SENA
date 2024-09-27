<?php
function numeros($num1, $num2) {
    if ($num1 == $num2) {
        return 'Son iguales';
    } else if ($num1 > $num2){
        return "$num1 es mayor";
    } else {
        return "$num2 es mayor";
    }
}