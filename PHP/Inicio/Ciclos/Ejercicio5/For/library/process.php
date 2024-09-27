<?php
$contPar = 0;
$contImpar =  0;
for ($cont1 = 1; $cont1 <= 5; $cont1++) {
    for ($cont2 = 1; $cont2 <= 5; $cont2++) {
        $result = $cont1 * $cont2;
        var_dump("$cont1 x $cont2 = $result");
        if ($result % 2 == 0){
            var_dump("buzz");
            $contPar++;
        }else{
            var_dump("bass");
            $contImpar++;
        }
    }
}
var_dump("Par: $contPar");
var_dump("Impar: $contImpar");
