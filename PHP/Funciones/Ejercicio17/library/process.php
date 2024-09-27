<?php
function numsFor($limit) {
    $nums = '';
    for ($cont = 1; $cont <= $limit; $cont++) { 
        $nums .= "$cont ";
        if ($cont % 2 == 0) {
            $nums .= "Par ";
        } else {
            $nums .= 'Impar ';
        }
    }
    return $nums;
}

function numsWhile($limit) {
    $nums = '';
    $cont = 0;
    while ($cont < $limit){
        $cont++;
        $nums .= "$cont ";
        if ($cont % 2 == 0) {
            $nums .= 'Par ';
        } else {
            $nums .= 'Impar ';
        }
    }
    return $nums;
}