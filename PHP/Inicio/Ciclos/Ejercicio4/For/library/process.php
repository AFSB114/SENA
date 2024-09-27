<?php
for ($cont = 1; $cont <= 5; $cont++) {
    $result = $cont *9;
    if ($result %2 == 0){
        var_dump("$result es par");
    }else{
        var_dump("$result es impar");
    }
}
