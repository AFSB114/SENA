function operaciones() {
    let num1 = document.getElementById('txtNum1')
    let num2 = document.getElementById('txtNum2')

    let valNum1 = parseInt(num1.value)
    let valNum2 = parseInt(num2.value)

    let operacion = parseInt(document.getElementById('operacion').value)

    if (isNaN(valNum1) || isNaN(valNum2 || isNaN(operacion))) {
        document.getElementById('operaciones').innerHTML = `<strong></strong>`
        return false
    }

    switch (operacion) {
        case 1:
            let suma = valNum1 + valNum2
            result = `Suma: ${suma}`
            break;
        case 2:
            let resta = valNum1 - valNum2
            result = `Resta: ${resta}`
            break;
        case 3:
            let multiplicacion = valNum1 * valNum2
            result = `Multiplicación: ${multiplicacion}`
            break;
        case 4:
            if (valNum1 == 0) {
                num1.value = ''
                document.getElementById('zero').innerHTML = 'El cero no se puede dividir'
            } else {
                let division = valNum1 / valNum2
                result = `División: ${division.toFixed(2)}`
                document.getElementById('zero').innerHTML = ''
            }
            break;
        default:
            result = ''
            break
    }

    document.getElementById('operaciones').innerHTML = `<strong>${result}</strong>`

    return false
}