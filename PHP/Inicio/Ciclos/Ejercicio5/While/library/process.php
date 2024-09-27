<?php
$cont1 = 0;
$contPar = 0;
$contImpar = 0;

while ($cont1 < 5) {
    $cont1++;
    $cont2 = 0;
    while ($cont2 < 5) {
        $cont2++;
        $result = $cont1 * $cont2;
        var_dump($cont1 . " x " . $cont2 . " = " . $result);
        if ($result % 2 == 0) {
            var_dump("buzz");
            $contPar++;
        } else {
            var_dump("bass");
            $contImpar++;
        }
    }
}

var_dump("par: " . $contPar);
var_dump("impar: " . $contImpar);
