function numeros(pnum, pnumFin) {
    let numFin = pnumFin;
    let num = pnum;
    let result;
    let screen = '';
    for (let cont = 1; cont <= numFin; cont++) {
        result = num * cont;
        screen += `${num} * ${cont} = ${result}\n`;
    }
    return screen;
}

const numerosExp = function (pnum, pnumFin) {
    let numFin = pnumFin;
    let num = pnum;
    let result;
    let screen = '';
    for (let cont = 1; cont <= numFin; cont++) {
        result = num * cont;
        screen += `${num} * ${cont} = ${result}\n`;
    }
    return screen;
}