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

var_dump($resultFive);

$numsX = [];
$cont3 = 0;
for ($cont1 = 0; $cont1 < 5; $cont1++) {
    for ($cont2 = 0; $cont2 < 5; $cont2++) {
        if ($cont1 === $cont2 || $cont1 + $cont2 === 4) {
            $numsX[$cont3] = $tableFive[$cont1][$cont2];
            $cont3++;
        }
    }
}

var_dump($numsX);