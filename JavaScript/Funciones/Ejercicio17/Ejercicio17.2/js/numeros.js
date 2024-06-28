function numeros(pnumFin) {
    let numFin = pnumFin;
    let result = '';
    for (let cont = 1; cont <= numFin; cont++) {
        result += `${cont} `;
        if (cont % 2 == 0) {
            result += 'es par\n';
        } else {
            result += 'es impar\n';
        }
    }
    return result;
}

const numerosExp = function (pnumFin) {
    let numFin = pnumFin;
    let result = '';
    for (let cont = 1; cont <= numFin; cont++) {
        result += `${cont} `;
        if (cont % 2 == 0) {
            result += 'es par\n';
        } else {
            result += 'es impar\n';
        }
    }
    return result;
}