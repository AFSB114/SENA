<?php
function numsFor($limit1,$limit2) {
    $nums = '';
    $contPar = 0;
    $contImpar = 0;
    for ($cont1 = 1; $cont1 <= $limit1; $cont1++) { 
        for ($cont2 = 1; $cont2 <= $limit2; $cont2++) {
            $result = $cont1 * $cont2;
            $nums .= "$cont1 * $cont2 = $result ";
            if ($result % 2 == 0) {
                $nums .= 'buzz | ';
                $contPar++;
            } else {
                $nums .= 'bass | ';
                $contImpar++;
            }
        }
    }
    $nums .= "Par: $contPar  Impar: $contImpar";
    return $nums;
}

// function numsWhile($limit1,$limit2) {
//     $nums = '';
//     $cont1 = 0;
//     $contPar = 0;
//     $contImpar = 0;
//     while ($cont1 < $limit1){
//         $cont1++;
//         $cont2 = 0;
//         while ($cont2 < $limit2){
//             $result = $cont1 * $cont2;
//             $nums .= "$cont1 * $cont2 = $result ";
//             if ($result % 2 == 0) {
//                 $nums .= 'buzz | ';
//                 $contPar++;
//             } else {
//                 $nums .= 'bass | ';
//                 $contImpar++;
//             }
//         }
//     }
//     return $nums;
// }