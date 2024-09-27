<?php
$num = 5;
for ($cont=1; $cont <= $num ; $cont++) { 
    if ( $cont%2==0){
        var_dump("$cont es par");
    } else {
        var_dump("$cont es impar");
    }
}