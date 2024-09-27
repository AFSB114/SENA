<?php
$bingo = [];
$cont = 1;
for ($iteracion1 = 0; $iteracion1 < 5; $iteracion1++) {
    $interno = [];
    for ($iteracion2 = 0; $iteracion2 < 5; $iteracion2++) {
        $interno[$iteracion2] = $cont * 2;
        $cont++;
    }
    $bingo[$iteracion1] = $interno;
}

// var_dump($bingo);

$x1 = [];
$index1 = 0;
for ($iter1 = 0; $iter1 < 3; $iter1++) {
    for ($iter2 = 0; $iter2 < 3; $iter2++) {
        if ($iter1 == $iter2 || $iter1 + $iter2 == 2) {
            $x1[$index1] = $bingo[$iter1][$iter2];
            $index1++;
        }
    }
}

var_dump($x1);
echo'<hr>';

$x2 = [];
$index2 = 0;
for ($iter1 = 2; $iter1 < 5; $iter1++) {
    for ($iter2 = 0; $iter2 < 3; $iter2++) {
        if ($iter1 + $iter2 == ($iter2 + 1) * 2 || $iter1 + $iter2 == 4) {
            $x2[$index2] = $bingo[$iter1][$iter2];
            $index2++;
        }
    }
}

var_dump($x2);
echo'<hr>';

$x3 = [];
$index3 = 0;
for ($iter1 = 0; $iter1 < 3; $iter1++) {
    for ($iter2 = 2; $iter2 < 5; $iter2++) {
        if ($iter1 + $iter2 == ($iter1 + 1) * 2 || $iter1 + $iter2 == 4) {
            $x3[$index3] = $bingo[$iter1][$iter2];
            $index3++;
        }
    }
}

var_dump($x3);
echo'<hr>';

$screen = '';
for ($iter1 = 0; $iter1 < 5; $iter1++) {
    if ($iter1 == 0) {
        $screen = 'B: ';
    } elseif ($iter1 == 1) {
        $screen .= 'I: ';
    } elseif ($iter1 == 2) {
        $screen .= 'N: ';
    } elseif ($iter1 == 3) {
        $screen .= 'G: ';
    } elseif ($iter1 == 4) {
        $screen .= 'O: ';
    }

    for ($iter2 = 0; $iter2 < 5; $iter2++) {
        $screen .= $bingo[$iter2][$iter1] . ' ';
    }
    $screen .= "<br>";
}

var_dump($screen);