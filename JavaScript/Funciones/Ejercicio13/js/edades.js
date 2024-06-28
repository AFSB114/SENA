let cont = 1;

function edades(panoNa, panoAc) {
    let anoNa = panoNa;
    let anoAc = panoAc;
    let edad = anoAc - anoNa;
    if (edad > 17) {
        console.log(`La persona ${cont} es mayor de edad`);
    } else {
        console.log(`La persona ${cont} es menor de edad`);
    }
    cont += 1;
    return edad;
}

const edadesExp = function (panoNa, panoAc) {
    let anoNa = panoNa;
    let anoAc = panoAc;
    let edad = anoAc - anoNa;
    if (edad > 17) {
        console.log(`La persona ${cont} es mayor de edad`);
    } else {
        console.log(`La persona ${cont} es menor de edad`);
    }
    cont += 1;
    return edad;
}

function promedio(psuma, pnum) {
    let suma = psuma;
    let num = pnum;
    let result = suma / num;
    return result;
}

const promedioExp = function (psuma, pnum) {
    let suma = psuma;
    let num = pnum;
    let result = suma / num;
    return result;
}