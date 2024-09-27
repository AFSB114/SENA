<?php
$tableFive = [];
$contFive = 1;
for ($cont1 = 0; $cont1 < 5; $cont1++) {
    $tableFive[$cont1] = [];
    for ($cont2 = 0; $cont2 < 5; $cont2++) {
        $tableFive[$cont1][$cont2] = $contFive * 5;
        $contFive++;
    }
}

// var_dump($tableFive);

$resultFive = '';
foreach ($tableFive as $rows) {
    foreach ($rows as $nums) {
        $resultFive .= "$nums ";
    }
    $resultFive .= "<br>";
}

// var_dump($resultFive);

$parFive = 0;
$imparFive = 0;
foreach ($tableFive as $rows) {
    foreach ($rows as $nums) {
        if ($nums % 2 == 0) {
            $parFive += $nums;
        } else {
            $imparFive += $nums;
        }
    }
}
$resultFive .= "<br>Suma Pares: $parFive<br>Suma Impares: $imparFive";

var_dump($resultFive);

echo '<hr>';

// TABLA DEL NUEVE
$tableNine = [];
$contNine = 1;
for ($cont1 = 0; $cont1 < 5; $cont1++) {
    $tableNine[$cont1] = [];
    for ($cont2 = 0; $cont2 < 5; $cont2++) {
        $tableNine[$cont1][$cont2] = $contNine * 9;
        $contNine++;
    }
}

// var_dump($tableNine);

$resultNine = '';
foreach ($tableNine as $rows) {
    foreach ($rows as $nums) {
        $resultNine .= "$nums ";
    }
    $resultNine .= "<br>";
}

// var_dump($resultNine);

$parNine = 0;
$imparNine = 0;
foreach ($tableNine as $rows) {
    foreach ($rows as $nums) {
        if ($nums % 2 == 0) {
            $parNine += $nums;
        } else {
            $imparNine += $nums;
        }
    }
}
$resultNine .= "<br>Suma Pares: $parNine<br>Suma Impares: $imparNine";

var_dump($resultNine);
