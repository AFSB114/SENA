let numsBingo = [];
let cont3 = 1;

for (let cont1 = 0; cont1 < 5; cont1++) {
    numsBingo[cont1] = [];
    for (let cont2 = 0; cont2 < 15; cont2++) {
        numsBingo[cont1][cont2] = cont3;
        cont3++;
    }
}

console.log(numsBingo);

let tableBingo = [['B'], ['I'], ['N'], ['G'], ['O']];

const numRandom = function (index) {
    let num = numsBingo[index][Math.floor(Math.random() * 15)];
    existe(num, index);
    return num;
}

const existe = function (num, index) {
    tableBingo[index].forEach(function (element) {
        if (num == element) {
            numRandom(index);
        } else {
            return num;
        }
    })
}

for (let cont1 = 0; cont1 < 5; cont1++) {
    for (let cont2 = 1; cont2 < 6; cont2++) {
        let num = numRandom(cont1);
        tableBingo[cont1][cont2] = num;
    }
}

console.log(tableBingo);

let result = '';

for (let cont4 = 0; cont4 < 6; cont4++) {
    for (let cont5 = 0; cont5 < 5; cont5++) {
        result += `${tableBingo[cont5][cont4]} `;
    }
    result += '\n';
}

console.log(result);