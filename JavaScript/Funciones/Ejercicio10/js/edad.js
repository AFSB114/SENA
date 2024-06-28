function edades(panoNa, panoAc) {
    let anoNa = panoNa;
    let anoAc = panoAc;
    let edad = anoAc - anoNa;
    if (edad > 17) {
        return 'Mayor de edad';
    } else {
        return 'Menor de edad';
    }
}

const edadesExp = function (panoNa, panoAc) {
    let anoNa = panoNa;
    let anoAc = panoAc;
    let edad = anoAc - anoNa;
    if (edad > 17) {
        return 'Mayor de edad';
    } else {
        return 'Menor de edad';
    }
}