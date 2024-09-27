<?php
$num = 5;
$cont = 0;
while ($cont < $num){
    $cont++;
    $result = $num * $cont;
    var_dump("$num x $cont = $result");
}