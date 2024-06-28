let tableFive = [];
let contFive = 1;

for (let cont1 = 0; cont1 < 5; cont1++) {
    tableFive[cont1] = [];
    for (let cont2 = 0; cont2 < 5; cont2++) {
        tableFive[cont1][cont2] = contFive * 5;
        contFive++;
    }
}
// console.log(tableFive);
let resultFive = '';

tableFive.forEach(function (rows) {
    rows.forEach(function (nums) {
        resultFive += `${nums} `;
    })
    resultFive += '\n';
});

// console.log(resultFive);
let numsX = [];
let cont3 = 0;
for (let cont1 = 0; cont1 < 5; cont1++) {
    for (let cont2 = 0; cont2 < 5; cont2++) {
        if (cont1 === cont2 || cont1 + cont2 === 4) {
            numsX[cont3] = tableFive[cont1][cont2];
            cont3++;
        } else {
            ;
        }
    }
}

console.log(`${numsX}`);