<?php
function numsFor($num,$limit) {
    $nums = '';
    for ($cont = 1; $cont <= $limit; $cont++) { 
        $result = $num * $cont;
        $nums .= "$result ";
        if ($result % 2 == 0) {
            $nums .= 'Par ';
        } else {
            $nums .= 'Impar ';
        }
    }
    return $nums;
}

function numsWhile($num,$limit) {
    $nums = '';
    $cont = 0;
    while ($cont < $limit){
        $cont++;
        $result = $num * $cont;
        $nums .= "$result ";
        if ($result % 2 == 0) {
            $nums .= 'Par ';
        } else {
            $nums .= 'Impar ';
        }
    }
    return $nums;
}