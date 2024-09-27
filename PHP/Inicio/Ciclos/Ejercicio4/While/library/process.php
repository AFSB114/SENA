<?php
$cont = 0;
while ($cont < 5){
    $cont++;
    $result = $cont * 9;
    if ($result % 2 == 0){
        var_dump("$result es par");
    }else{
        var_dump("$result es impar");
    }
}
