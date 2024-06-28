function sueldo(pdias, pvalDia) {
    let dias = pdias
    let valDia = pvalDia
    let valSueldo = dias * valDia
    return valSueldo
}

function trans(pvalSueldo, psalMin) {
    let valSueldo = pvalSueldo
    let salMin = psalMin
    let valTrans = 0

    if (valSueldo < salMin * 2) {
        valTrans = 200000
    } else {
        valTrans = 0
    }

    return valTrans
}

function reten(pvalSueldo, psalMin) {
    let valSueldo = pvalSueldo
    let salMin = psalMin
    let valReten = 0

    if (valSueldo > salMin * 4) {
        valReten = valSueldo * 0.04
    } else {
        valReten = 0
    }

    return valReten
}

function salud(pvalSueldo) {
    let valSueldo = pvalSueldo
    let valSalud = valSueldo * 0.12
    return valSalud
}

function pension(pvalSueldo) {
    let valSueldo = pvalSueldo
    let valPension = valSueldo * 0.16
    return valPension
}

function arl(pvalSueldo) {
    let valSueldo = pvalSueldo
    let valArl = valSueldo * 0.052
    return valArl
}

function nomina() {
    let dias = parseInt(document.getElementById('dias').value)
    let valDia = parseInt(document.getElementById('valDia').value)

    if (isNaN(dias) || isNaN(valDia)) {
        document.getElementById('result').innerHTML = ''
        return false
    }

    let valSueldo = sueldo(dias, valDia)

    const salMin = 1300000

    let valTrans = trans(valSueldo, salMin)
    let valReten = reten(valSueldo, salMin)

    let valSalud = salud(valSueldo)
    let valPension = pension(valSueldo)
    let valArl = arl(valSueldo)

    let sueldoTot = valSueldo + valTrans - (valReten + valSalud + valPension + valArl)

    document.getElementById('result').innerHTML = `Sueldo: ${valSueldo.toFixed(0)}<br>Transporte: ${valTrans.toFixed(0)}<br>Retencion: ${valReten.toFixed(0)}<br>Salud: ${valSalud.toFixed(0)}<br>Pension: ${valPension.toFixed(0)}<br>Arl: ${valArl.toFixed(0)}<br>Sueldo Total: ${sueldoTot.toFixed(0)}`

    return false
}