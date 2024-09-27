<?php

$empleados = [
    ['id' => 1, 'nombres' => 'Juan', 'apellidos' => 'Pérez', 'cargo' => 'Desarrollador', 'valDia' => 100000, 'diasTra' => 20],
    ['id' => 2, 'nombres' => 'María', 'apellidos' => 'García', 'cargo' => 'Diseñadora', 'valDia' => 80000, 'diasTra' => 18],
    ['id' => 3, 'nombres' => 'Carlos', 'apellidos' => 'Rodríguez', 'cargo' => 'Gerente', 'valDia' => 150000, 'diasTra' => 22],
    ['id' => 4, 'nombres' => 'Ana', 'apellidos' => 'Martínez', 'cargo' => 'Contadora', 'valDia' => 90000, 'diasTra' => 19],
    ['id' => 5, 'nombres' => 'Pedro', 'apellidos' => 'López', 'cargo' => 'Vendedor', 'valDia' => 70000, 'diasTra' => 21],
    ['id' => 6, 'nombres' => 'Laura', 'apellidos' => 'Fernández', 'cargo' => 'Secretaria', 'valDia' => 60000, 'diasTra' => 17],
    ['id' => 7, 'nombres' => 'Javier', 'apellidos' => 'Gómez', 'cargo' => 'Analista', 'valDia' => 110000, 'diasTra' => 23],
    ['id' => 8, 'nombres' => 'Sofía', 'apellidos' => 'Torres', 'cargo' => 'Recursos Humanos', 'valDia' => 95000, 'diasTra' => 20],
    ['id' => 9, 'nombres' => 'Diego', 'apellidos' => 'Ramírez', 'cargo' => 'Ingeniero', 'valDia' => 1200000, 'diasTra' => 19],
    ['id' => 10, 'nombres' => 'Lucía', 'apellidos' => 'Moreno', 'cargo' => 'Asistente', 'valDia' => 65000, 'diasTra' => 18]
];

$salMin = 1300000;

function salario($pdiasTra, $pvalDia) {
    $diasTra = $pdiasTra;
    $valDia = $pvalDia;
    $salario = $diasTra * $valDia;
    return $salario;
}

function subTrans($psalario) {
    $salario = $psalario;
    if ($salario < $GLOBALS['salMin'] * 2) {
        $valSubTrans = 120000;
    } else {
        $valSubTrans = 0;
    }
    return $valSubTrans;
}

function salud($pvalSalario) {
    $valSalario = $pvalSalario;
    $valSalud = $valSalario * 0.12;
    return $valSalud;
}

function pension($pvalSalario) {
    $valSalario = $pvalSalario;
    $valPension = $valSalario * 0.16;
    return $valPension;
}

function arl($pvalSalario) {
    $valSalario = $pvalSalario;
    $valArl = $valSalario * 0.052;
    return $valArl;
}

function retencion($pvalSalario) {
    $valSalario = $pvalSalario;
    if ($valSalario > $GLOBALS['salMin'] * 6) {
        $valRetencion = $valSalario * 0.02;
    } else if ($valSalario > $GLOBALS['salMin'] * 8) {
        $valRetencion = $valSalario * 0.04;
    } else if ($valSalario > $GLOBALS['salMin'] * 12) {
        $valRetencion = $valSalario * 0.08;
    } else {
        $valRetencion = 0;
    }
    return $valRetencion;
}

function pagoTot($pvalSalario, $pvalSubTrans, $pvalSalud, $pvalPension, $pvalArl, $pvalRetencion) {
    $valSalario = $pvalSalario;
    $valSubTrans = $pvalSubTrans;
    $valSalud = $pvalSalud;
    $valPension = $pvalPension;
    $valArl = $pvalArl;
    $valRetencion = $pvalRetencion;
    $valPagoTot = $valSalario + $valSubTrans - $valRetencion - ($valSalud + $valPension + $valArl);
    return $valPagoTot;
}

$nominaEmpleados = [];
$pagosTotales = [['salud' => 0, 'pension' => 0, 'arl' => 0, 'retencion' => 0, 'pagoTot' => 0]];

for ($index = 0; $index < 10; $index++) {
    $id = $empleados[$index]['id'];
    $nombres = $empleados[$index]['nombres'];
    $apellidos = $empleados[$index]['apellidos'];
    $cargo = $empleados[$index]['cargo'];
    $nominaEmpleados[] = ['id' => $id, 'nombres' => $nombres, 'apellidos' => $apellidos, 'cargo' => $cargo];

    $diasTra = $empleados[$index]['diasTra'];
    $valDia = $empleados[$index]['valDia'];
    $valSalario = salario($diasTra, $valDia);
    $nominaEmpleados[$index]['salario'] = $valSalario;

    $valSubTrans = subTrans($valSalario);
    $nominaEmpleados[$index]['subTrans'] = $valSubTrans;

    $valSalud = salud($valSalario);
    $nominaEmpleados[$index]['salud'] = $valSalud;
    $pagosTotales[0]['salud'] += $valSalud;

    $valPension = pension($valSalario);
    $nominaEmpleados[$index]['pension'] = $valPension;
    $pagosTotales[0]['pension'] += $valPension;

    $valArl = arl($valSalario);
    $nominaEmpleados[$index]['arl'] = $valArl;
    $pagosTotales[0]['arl'] += $valArl;

    $valRetencion = retencion($valSalario);
    $nominaEmpleados[$index]['retencion'] = $valRetencion;
    $pagosTotales[0]['retencion'] += $valRetencion;

    $valPagoTot = pagoTot($valSalario, $valSubTrans, $valSalud, $valPension, $valArl, $valRetencion);
    $nominaEmpleados[$index]['pagoTot'] = $valPagoTot;
    $pagosTotales[0]['pagoTot'] += $valPagoTot;
}

$screenEmpleados = "TABLA 1<hr>";
$screenNominaEmpleados = "TABLA 2<hr>";
$screenPagosTotales = "TABLA 3<hr>";

foreach ($empleados as $row) {
    foreach ($row as $key => $value) {
        $screenEmpleados .= "$key: $value | ";
    }
    $screenEmpleados .= "<br>";
}
$screenEmpleados .= "<br>";

foreach ($nominaEmpleados as $row) {
    foreach ($row as $key => $value) {
        $screenNominaEmpleados .= "$key: $value | ";
    }
    $screenNominaEmpleados .= "<br>";
}
$screenNominaEmpleados .= "<br>";


foreach ($pagosTotales as $row) {
    foreach ($row as $key => $value) {
        $screenPagosTotales .= "$key: $value | ";
    }
}

var_dump($screenEmpleados);
var_dump($screenNominaEmpleados);
var_dump($screenPagosTotales);