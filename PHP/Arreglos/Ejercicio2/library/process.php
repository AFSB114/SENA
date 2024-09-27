<?php
$nums = [[], [], []];

for ($num = 0; $num < 10; $num++) {
    $nums[0][$num] = $num + 1;
}

$contPar = 0;
$contImpar = 0;

foreach($nums[0] as $number){
    if ($number % 2 == 0) {
        $nums[1][$contPar] = $number;
        $contPar++;
    } else {
        $nums[2][$contImpar] = $number;
        $contImpar++;
    }
}

var_dump($nums[1]);
echo '<br>';
var_dump($nums[2]);
