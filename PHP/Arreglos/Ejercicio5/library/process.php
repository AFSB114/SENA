<?php
$numsBingo = [];
$cont3 = 1;
for ($cont1 = 0; $cont1 < 5; $cont1++) {
    $numsBingo[$cont1] = [];
    for ($cont2 = 0; $cont2 < 15; $cont2++) {
        $numsBingo[$cont1][$cont2] = $cont3;
        $cont3++;
    }
}

// var_dump($numsBingo);

$tableBingo = [['B'], ['I'], ['N'], ['G'], ['O']];

function numRandom($index, $numsBingo, &$tableBingo) {
    $num = $numsBingo[$index][array_rand($numsBingo[$index])];
    existe($num, $index, $numsBingo, $tableBingo);
    return $num;
}

function existe($num, $index, $numsBingo, &$tableBingo) {
    if (in_array($num, $tableBingo[$index])) {
        $num = numRandom($index, $numsBingo, $tableBingo);
    }
    return $num;
}

for ($cont1 = 0; $cont1 < 5; $cont1++) {
    for ($cont2 = 1; $cont2 < 6; $cont2++) {
        $num = numRandom($cont1, $numsBingo, $tableBingo);
        $tableBingo[$cont1][$cont2] = $num;
    }
}

// var_dump($tableBingo);

$result = '';
for ($cont4 = 0; $cont4 < 6; $cont4++) {
    for ($cont5 = 0; $cont5 < 5; $cont5++) {
        $result .= $tableBingo[$cont5][$cont4] . ' ';
    }
    $result .= "<br>";
}

var_dump($result);