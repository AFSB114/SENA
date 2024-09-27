<?php
function numsFor($num,$limit) {
    $nums = '';
    for ($cont = 1; $cont <= $limit; $cont++) { 
        $result = $num * $cont;
        $nums .= "$num * $cont = $result | ";
    }
    return $nums;
}

function numsWhile($num,$limit) {
    $nums = '';
    $cont = 0;
    while ($cont < $limit){
        $cont++;
        $result = $num * $cont;
        $nums .= "$num * $cont = $result | ";
    }
    return $nums;
}