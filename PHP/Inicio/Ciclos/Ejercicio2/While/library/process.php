<?php
$num = 5;
while ($cont < $num) {
    $cont++;
    if ($cont%2==0){
        var_dump("$cont es par");
    } else {
        var_dump("$cont es impar");
    }
}
