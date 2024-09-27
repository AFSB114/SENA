<?php
const salMin = 1300000;

function sueldo($dias, $valDia){
    return $dias * $valDia;
}

function subTrans($sueldo) {
    if ($sueldo <= salMin * 2) {
        return 120000;
    } else {
        return 0;
    }
}

function retencion($sueldo) {
    if ($sueldo <= salMin * 4) {
        return $sueldo * 0.04;
    } else {
        return 0;
    }
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
    $valSubTrans = subTrans($valSueldo);
    $valRetencion = retencion($valSueldo);
    $valSalud = salud($valSueldo);
    $valPension = pension($valSueldo);
    $valArl = arl($valSueldo);
    return $valSueldo + $valSubTrans - ($valRetencion + $valSalud + $valPension + $valArl);
}