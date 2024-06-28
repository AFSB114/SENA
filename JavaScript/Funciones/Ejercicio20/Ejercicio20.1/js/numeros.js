function numeros(pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let cont1 = 0;
    let contPar = 0;
    let contImpar = 0;
    let print = '';
    let result;
    while (cont1 < num1) {
        cont1 += 1
        let cont2 = 0;
        while (cont2 < num2) {
            cont2 += 1;
            result = cont1 * cont2;
            print += `${cont1} * ${cont2} = ${result} `;
            if (result % 2 == 0) {
                print += 'buzz\n';
                contPar += 1;
            } else {
                print += 'bass\n';
                contImpar += 1;
            }
        }
    }
    print += `Par: ${contPar}\nImpar: ${contImpar}`;
    return print;
}

const numerosExp = function (pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let cont1 = 0;
    let contPar = 0;
    let contImpar = 0;
    let print = '';
    let result;
    while (cont1 < num1) {
        cont1 += 1
        let cont2 = 0;
        while (cont2 < num2) {
            cont2 += 1;
            result = cont1 * cont2;
            print += `${cont1} * ${cont2} = ${result} `;
            if (result % 2 == 0) {
                print += 'buzz\n';
                contPar += 1;
            } else {
                print += 'bass\n';
                contImpar += 1;
            }
        }
    }
    print += `Par: ${contPar}\nImpar: ${contImpar}`;
    return print;
}