function salario(pdias, pvalDias) {
    let dias = pdias;
    let valDias = pvalDias;
    let salario = dias * valDias;
    let salud = salario * 0.12;
    let pension = salario * 0.16;
    let arl = salario * 0.052;
    let desc = salud + pension + arl;
    salario -= desc;
    return salario;
}

const salarioExp = function (pdias, pvalDias) {
    let dias = pdias;
    let valDias = pvalDias;
    let salario = dias * valDias;
    let salud = salario * 0.12;
    let pension = salario * 0.16;
    let arl = salario * 0.052;
    let desc = salud + pension + arl;
    salario -= desc;
    return salario;
}