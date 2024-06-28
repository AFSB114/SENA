function sueldo(pdias, pvalDia) {
    let dias = pdias
    let valDia = pvalDia
    let valSueldo = dias * valDia
    return valSueldo
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
        return false
    }

    let valSueldo = sueldo(dias, valDia)

    let valSalud = salud(valSueldo)
    let valPension = pension(valSueldo)
    let valArl = arl(valSueldo)

    let sueldoTot = valSueldo - (valSalud + valPension + valArl)

    document.getElementById('result').innerHTML = `Sueldo: ${valSueldo.toFixed(0)}<br>Salud: ${valSalud.toFixed(0)}<br>Pension: ${valPension.toFixed(0)}<br>Arl: ${valArl.toFixed(0)}<br>Sueldo Total: ${sueldoTot.toFixed(0)}`

    return false
}