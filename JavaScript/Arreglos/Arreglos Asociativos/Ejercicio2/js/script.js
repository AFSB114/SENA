let empleados = [
    {
        id: 1, nombres: 'Juan', apellidos: 'Pérez', cargo: 'Desarrollador', valDia: 100000, diasTra: 20
    }, {
        id: 2, nombres: 'María', apellidos: 'García', cargo: 'Diseñadora', valDia: 80000, diasTra: 18
    }, {
        id: 3, nombres: 'Carlos', apellidos: 'Rodríguez', cargo: 'Gerente', valDia: 150000, diasTra: 22
    }, {
        id: 4, nombres: 'Ana', apellidos: 'Martínez', cargo: 'Contadora', valDia: 90000, diasTra: 19
    }, {
        id: 5, nombres: 'Pedro', apellidos: 'López', cargo: 'Vendedor', valDia: 70000, diasTra: 21
    }, {
        id: 6, nombres: 'Laura', apellidos: 'Fernández', cargo: 'Secretaria', valDia: 60000, diasTra: 17
    }, {
        id: 7, nombres: 'Javier', apellidos: 'Gómez', cargo: 'Analista', valDia: 110000, diasTra: 23
    }, {
        id: 8, nombres: 'Sofía', apellidos: 'Torres', cargo: 'Recursos Humanos', valDia: 95000, diasTra: 20
    }, {
        id: 9, nombres: 'Diego', apellidos: 'Ramírez', cargo: 'Ingeniero', valDia: 1200000, diasTra: 19
    }, {
        id: 10, nombres: 'Lucía', apellidos: 'Moreno', cargo: 'Asistente', valDia: 65000, diasTra: 18
    }
];

const salMin = 1300000;

const salario = function (pdiasTra, pvalDia) {
    let diasTra = pdiasTra;
    let valDia = pvalDia;
    let salario = diasTra * valDia;
    return salario;
}

const subTrans = function (psalario) {
    let salario = psalario;
    let valSubTrans;
    if (salario < salMin * 2) {
        valSubTrans = 120000;
    } else {
        valSubTrans = 0;
    }
    return valSubTrans;
}

const salud = function (pvalSalario) {
    let valSalario = pvalSalario;
    let valSalud = valSalario * 0.12;
    return valSalud;
}

const pension = function (pvalSalario) {
    let valSalario = pvalSalario;
    let valPension = valSalario * 0.16;
    return valPension;
}

const arl = function (pvalSalario) {
    let valSalario = pvalSalario;
    let valArl = valSalario * 0.052;
    return valArl;
}

const retencion = function (pvalSalario) {
    let valSalario = pvalSalario;
    let valRetencion;

    if (valSalario > salMin * 6) {
        valRetencion = valSalario * 0.02;
    } else if (valSalario > salMin * 8) {
        valRetencion = valSalario * 0.04;
    } else if (valSalario > salMin * 12) {
        valRetencion = valSalario * 0.08;
    } else {
        valRetencion = 0;
    }
    return valRetencion;
}

const pagoTot = function (pvalSalario, pvalSubTrans, pvalSalud, pvalPension, pvalArl, pvalRetencion) {
    let valSalario = pvalSalario;
    let valSubTrans = pvalSubTrans;
    let valSalud = pvalSalud;
    let valPension = pvalPension;
    let valArl = pvalArl;
    let valRetencion = pvalRetencion;
    let valPagoTot = valSalario + valSubTrans - valRetencion - (valSalud + valPension + valArl);
    return valPagoTot;
}

let nominaEmpleados = [];
let pagosTotales = [{ salud: 0, pension: 0, arl: 0, retencion: 0, pagoTot: 0 }];

for (let index = 0; index < 10; index++) {
    let { id, nombres, apellidos, cargo } = empleados[index];
    nominaEmpleados.push({ id, nombres, apellidos, cargo });

    let diasTra = empleados[index].diasTra;
    let valDia = empleados[index].valDia;
    let valSalario = salario(diasTra, valDia);
    nominaEmpleados[index].salario = valSalario;

    let valSubTrans = subTrans(valSalario);
    nominaEmpleados[index].subTrans = valSubTrans;

    let valSalud = salud(valSalario);
    nominaEmpleados[index].salud = valSalud;
    pagosTotales[0].salud += valSalud;

    let valPension = pension(valSalario);
    nominaEmpleados[index].pension = valPension;
    pagosTotales[0].pension += valPension;

    let valArl = arl(valSalario);
    nominaEmpleados[index].arl = valArl;
    pagosTotales[0].arl += valArl;

    let valRetencion = retencion(valSalario);
    nominaEmpleados[index].retencion = valRetencion;
    pagosTotales[0].retencion += valRetencion;

    let valPagoTot = pagoTot(valSalario, valSubTrans, valSalud, valPension, valArl, valRetencion);
    nominaEmpleados[index].pagoTot = valPagoTot;
    pagosTotales[0].pagoTot += valPagoTot;
}

let screenEmpleados = 'TABLA 1\n\n';
let screenNominaEmpleados = 'TABLA 2\n\n';
let screenPagosTotales = 'TABLA 3\n\n';

for (let row of empleados) {
    for (let key in row) {
        screenEmpleados += `${key}: ${row[key]} | `;
    }
    screenEmpleados += '\n----------------------------------------------------------------------------------------------------------------\n';

}

for (let row of nominaEmpleados) {
    for (let key in row) {
        screenNominaEmpleados += `${key}: ${row[key]} | `;
    }
    screenNominaEmpleados += '\n----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n'

}

for (let row of pagosTotales) {
    for (let key in row) {
        screenPagosTotales += `${key}: ${row[key]} | `;
    }
}

console.log(screenEmpleados);
console.log(screenNominaEmpleados);
console.log(screenPagosTotales);