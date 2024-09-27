<?php
function sueldo($dias, $valDia){
    return $dias * $valDia;
}

function salud($sueldo) {
    return $sueldo * 0.12;
}

function pension($sueldo) {
    return $sueldo * 0.16;
}

function arl($sueldo) {
    return $sueldo * 0.052;
}

function nomina($dias, $valDia) {
    $valSueldo = sueldo($dias, $valDia);
    $valSalud = salud($valSueldo);
    $valPension = pension($valSueldo);
    $valArl = arl($valSueldo);
    return $valSueldo - ($valSalud + $valPension + $valArl);
}