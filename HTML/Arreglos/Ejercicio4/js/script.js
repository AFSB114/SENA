let numsBingo = [];
let cont = 1;

for (let index1 = 0; index1 < 5; index1++) {
    numsBingo[index1] = [];
    for (let index2 = 0; index2 < 15; index2++) {
        numsBingo[index1][index2] = cont;
        cont++;
    }
}

let tableBingo = [];

const getAvailableNumbers = function (index) {
    let availableNumbers = [];
    numsBingo[index].forEach(num => {
        if (!tableBingo[index] || !tableBingo[index].includes(num)) {
            availableNumbers.push(num);
        }
    });
    return availableNumbers;
}

const numRandom = function (index) {
    let availableNumbers = getAvailableNumbers(index);
    if (availableNumbers.length === 0) {
        return null; // No hay más números disponibles
    }
    let randomIndex = Math.floor(Math.random() * availableNumbers.length);
    return availableNumbers[randomIndex];
}

for (let index1 = 0; index1 < 5; index1++) {
    let nums = [];
    for (let index2 = 0; index2 < 5; index2++) {
        let num = numRandom(index1);
        if (num !== null) {
            if (!tableBingo[index1]) {
                tableBingo[index1] = [];
            }
            tableBingo[index1].push(num);
        } else {
            break; // No hay más números disponibles para esta columna
        }
    }
    if (nums.length > 0) {
        tableBingo[index1] = nums;
    }
}

screen = ''

for (let index1 = 0; index1 < 5; index1++) {
    screen += '<tr>'
    for (let index2 = 0; index2 < 5; index2++) {
        screen += `<td>${tableBingo[index2][index1]}</td>`
    }
    screen += '</tr>'
}


let tables = document.getElementsByName('nums')

tables.forEach(tabla => {
    tabla.innerHTML = screen
})
