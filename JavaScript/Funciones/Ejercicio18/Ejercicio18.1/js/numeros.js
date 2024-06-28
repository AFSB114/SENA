function numeros(pnum, pnumFin) {
    let numFin = pnumFin;
    let num = pnum;
    let cont = 0;
    let result;
    let screen = '';
    while (cont < numFin) {
        cont += 1;
        result = num * cont;
        screen += `${num} * ${cont} = ${result}\n`;
    }
    return screen;
}

const numerosExp = function (pnum, pnumFin) {
    let numFin = pnumFin;
    let num = pnum;
    let cont = 0;
    let result;
    let screen = '';
    while (cont < numFin) {
        cont += 1;
        result = num * cont;
        screen += `${num} * ${cont} = ${result}\n`;
    }
    return screen;
}