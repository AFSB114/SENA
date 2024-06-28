function numeros(pnumFin) {
    let numFin = pnumFin;
    let cont = 0;
    let result = '';
    while (cont < numFin) {
        cont = cont + 1;
        if (cont % 2 == 0) {
            result += `${cont} es par\n`;
        } else {
            result += `${cont} es impar\n`;
        }
    }
    return result;
}

const numerosExp = function (pnumFin) {
    let numFin = pnumFin;
    let cont = 0;
    let result = '';
    while (cont < numFin) {
        cont = cont + 1;
        if (cont % 2 == 0) {
            result += `${cont} es par\n`;
        } else {
            result += `${cont} es impar\n`;
        }
    }
    return result;
}