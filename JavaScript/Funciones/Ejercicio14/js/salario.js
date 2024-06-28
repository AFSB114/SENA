function salario(pdias, pvalDias) {
    let dias = pdias;
    let valDias = pvalDias;
    let valSalario = dias * valDias;
    return valSalario;
}

function subTrans(pvalSalario) {
    let valSalario = pvalSalario;
    let salMin = 1600000;
    let valSubTrans;
    if (valSalario <= salMin * 2) {
        valSubTrans = 114000;
    } else {
        valSubTrans = 0;
    }
    return valSubTrans;
}

function retencion(pvalSalario) {
    let valSalario = pvalSalario;
    let salMin = 1600000;
    let valRetencion;
    if (valSalario >= salMin * 4) {
        valRetencion = salario * 0.4;
    } else {
        valRetencion = 0;
    }
    return valRetencion;
}

function deducible(pvalSalario) {
    let valSalud = salud(pvalSalario);
    let valPension = pension(pvalSalario);
    let valArl = arl(pvalSalario);
    //console.log(`Salud: ${valSalud}\nPension: ${valPension}\narl: ${valArl}`);
    let valDeducible = valSalud + valPension + valArl;
    return valDeducible;
}

function salud(pvalSalario) {
    let valSalario = pvalSalario;
    let valSalud = valSalario * 0.12;
    return valSalud;
}

function pension(pvalSalario) {
    let valSalario = pvalSalario;
    let valPension = valSalario * 0.16;
    return valPension;
}

function arl(pvalSalario) {
    let valSalario = pvalSalario;
    let valArl = valSalario * 0.052;
    return valArl;
}

function pagoTot(pvalSalario, pvalSubTrans, pvalRetencion, pvalDeducible) {
    let valSalario = pvalSalario;
    let valSubTrans = pvalSubTrans;
    let valRetencion = pvalRetencion;
    let valDeducible = pvalDeducible;
    let valPagoTot = valSalario + valSubTrans - valRetencion - valDeducible;
    return valPagoTot;
}

//EXPRESIONES

const salarioExp = function (pdias, pvalDias) {
    let dias = pdias;
    let valDias = pvalDias;
    let valSalario = dias * valDias;
    return valSalario;
}

const subTransExp = function (pvalSalario) {
    let valSalario = pvalSalario;
    let salMin = 1600000;
    let valSubTrans;
    if (valSalario <= salMin * 2) {
        valSubTrans = 114000;
    } else {
        k
        valSubTrans = 0;
    }
    return valSubTrans;
}

const retencionExp = function (pvalSalario) {
    let valSalario = pvalSalario;
    let salMin = 1600000;
    let valRetencion;
    if (valSalario >= salMin * 4) {
        valRetencion = salario * 0.4;
    } else {
        valRetencion = 0;
    }
    return valRetencion;
}

const deducibleExp = function (pvalSalario) {
    let valSalud = salud(pvalSalario);
    let valPension = pension(pvalSalario);
    let valArl = arl(pvalSalario);
    console.log(`Salud: ${valSalud}\nPension: ${valPension}\narl: ${valArl}`);
    let valDeducible = valSalud + valPension + valArl;
    return valDeducible;
}

const saludExp = function (pvalSalario) {
    let valSalario = pvalSalario;
    let valSalud = valSalario * 0.12;
    return valSalud;
}

const pensionExp = function (pvalSalario) {
    let valSalario = pvalSalario;
    let valPension = valSalario * 0.16;
    return valPension;
}

const arlExp = function (pvalSalario) {
    let valSalario = pvalSalario;
    let valArl = valSalario * 0.052;
    return valArl;
}

const pagoTotExp = function (pvalSalario, pvalSubTrans, pvalRetencion, pvalDeducible) {
    let valSalario = pvalSalario;
    let valSubTrans = pvalSubTrans;
    let valRetencion = pvalRetencion;
    let valDeducible = pvalDeducible;
    let valPagoTot = valSalario + valSubTrans - valRetencion - valDeducible;
    return valPagoTot;
}