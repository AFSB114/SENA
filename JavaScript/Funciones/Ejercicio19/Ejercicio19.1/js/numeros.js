function numeros(pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let cont = 0;
    let result;
    let screen = '';
    while (cont < num2) {
        cont += 1;
        result = num1 * cont;
        screen += `${result} `;
        if (result % 2 == 0) {
            screen += 'es par\n';
        } else {
            screen += 'es impar\n';
        }
    }
    return screen;
}

const numerosExp = function (pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let cont = 0;
    let result;
    let screen = '';
    while (cont < num2) {
        cont += 1;
        result = num1 * cont;
        screen += `${result} `;
        if (result % 2 == 0) {
            screen += 'es par\n';
        } else {
            screen += 'es impar\n';
        }
    }
    return screen;
}