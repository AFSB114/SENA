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

let parFive = 0;
let imparFive = 0;

tableFive.forEach(function (rows) {
    rows.forEach(function (nums) {
        if (nums % 2 == 0) {
            parFive += nums;
        } else {
            imparFive += nums;
        }
    })
})

resultFive += `\nSuma Pares: ${parFive}\nSuma Impares: ${imparFive}`;
// console.log(resultFive);

//TABLA DEL NUEVE

let tableNine = [];
let contNine = 1;

for (let cont1 = 0; cont1 < 5; cont1++) {
    tableNine[cont1] = [];
    for (let cont2 = 0; cont2 < 5; cont2++) {
        tableNine[cont1][cont2] = contNine * 9;
        contNine++;
    }
}

// console.log(tableNine);
let resultNine = '';

tableNine.forEach(function (rows) {
    rows.forEach(function (nums) {
        resultNine += `${nums} `;
    })
    resultNine += '\n';
});
// console.log(resultNine);

let parNine = 0;
let imparNine = 0;


tableNine.forEach(function (rows) {
    rows.forEach(function (nums) {
        if (nums % 2 == 0) {
            parNine += nums;
        } else {
            imparNine += nums;
        }
    })
})

resultNine += `\nSuma Pares: ${parNine}\nSuma Impares: ${imparNine}`;
console.log(resultNine);
