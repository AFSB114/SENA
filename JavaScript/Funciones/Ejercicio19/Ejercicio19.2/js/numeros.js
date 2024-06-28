function numeros(pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let result;
    let screen = '';
    for (let cont = 1; cont <= num2; cont++) {
        result = num1 * cont;
        screen += `${result} `;
        if (result % 2 == 0) {
            screen += `es par\n`;
        } else {
            screen += `es impar\n`;
        }
    }
    return screen;
}

const numerosExp = function (pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let result;
    let screen = '';
    for (let cont = 1; cont <= num2; cont++) {
        result = num1 * cont;
        screen += `${result} `;
        if (result % 2 == 0) {
            screen += `es par\n`;
        } else {
            screen += `es impar\n`;
        }
    }
    return screen;
}