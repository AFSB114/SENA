let bingo = [];
let cont = 1;
for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    let interno = [];
    for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        interno[iteracion2] = cont * 2;
        cont++;
    }
    bingo[iteracion1] = interno;
}
console.log(bingo);

let x1 = [];
let index1 = 0;

for (let iter1 = 0; iter1 < 3; iter1++) {
    for (let iter2 = 0; iter2 < 3; iter2++) {
        if (iter1 == iter2 || iter1 + iter2 == 2) {
            x1[index1] = bingo[iter1][iter2];
            index1++;
        } else {
            ;
        }
    }
}
console.log(x1);

let x2 = [];
let index2 = 0;

for (let iter1 = 2; iter1 < 5; iter1++) {
    for (let iter2 = 0; iter2 < 3; iter2++) {
        if (iter1 + iter2 == (iter2 + 1) * 2 || iter1 + iter2 == 4) {
            x2[index2] = bingo[iter1][iter2];
            index2++;
        } else {
            ;
        }
    }
}
console.log(x2);

let x3 = [];
let index3 = 0;

for (let iter1 = 0; iter1 < 3; iter1++) {
    for (let iter2 = 2; iter2 < 5; iter2++) {
        if (iter1 + iter2 == (iter1 + 1) * 2 || iter1 + iter2 == 4) {
            x3[index3] = bingo[iter1][iter2];
            index3++;
        } else {
            ;
        }
    }
}
console.log(x3);

let screen = '';

for (let iter1 = 0; iter1 < 5; iter1++) {
    if (iter1 == 0) {
        screen = 'B: ';
    } else if (iter1 == 1) {
        screen += 'I: ';
    } else if (iter1 == 2) {
        screen += 'N: ';
    } else if (iter1 == 3) {
        screen += 'G: ';
    } else if (iter1 == 4) {
        screen += 'O: ';
    } else {
        screen += '';
    }
    for (let iter2 = 0; iter2 < 5; iter2++) {
        screen += `${bingo[iter2][iter1]} `;
    }
    screen += '\n';
}

console.log(screen);
