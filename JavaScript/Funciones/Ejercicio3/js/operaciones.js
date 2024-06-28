function operations(poperation, pnum1, pnum2) {
    let operation = poperation.toLowerCase();
    let num1 = pnum1;
    let num2 = pnum2;
    let result;
    if (operation == "suma" || operation == '+') {
        result = suma(num1, num2);
    }
    else if (operation == "resta" || operation == '-') {
        result = resta(num1, num2);
    }
    else if (operation == "multiplicacion" || operation == '*' || operation == 'x') {
        result = multiplicacion(num1, num2);
    }
    else if (operation == "division" || operation == '/') {
        result = division(num1, num2);
    }
    return result;
}

function suma(pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let sumar;
    sumar = num1 + num2;
    return `Suma: ${sumar}`;
}

function resta(pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let restar;
    restar = num1 - num2;
    return `Resta: ${restar}`;
}

function multiplicacion(pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let multiplicar;
    multiplicar = num1 * num2;
    return `Multiplicacion: ${multiplicar}`;
}

function division(pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let dividir;
    dividir = num1 / num2;
    return `Division: ${dividir}`;
}

const operationsExp = function (poperation, pnum1, pnum2) {
    let operation = poperation.toLowerCase();
    let num1 = pnum1;
    let num2 = pnum2;
    let result;
    if (operation == "suma" || operation == '+') {
        result = suma(num1, num2);
    }
    else if (operation == "resta" || operation == '-') {
        result = resta(num1, num2);
    }
    else if (operation == "multiplicacion" || operation == '*' || operation == 'x') {
        result = multiplicacion(num1, num2);
    }
    else if (poperation == "division" || operation == '/') {
        result = division(num1, num2);
    }
    else {
        result = 'Operacion no valida';
    }
    return result;
}

const sumaExp = function (pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let sumar;
    sumar = num1 + num2;
    return `Suma: ${sumar}`;
}

const restaExp = function (pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let restar;
    restar = num1 - num2;
    return `Resta: ${restar}`;
}

const multiplicacionExp = function (pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let multiplicar;
    multiplicar = num1 * num2;
    return `Multiplicacion: ${multiplicar}`;
}

const divisionExp = function (pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let dividir;
    dividir = num1 / num2;
    return `Division: ${dividir}`;
}