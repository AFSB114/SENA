function prom() {
    let nota1 = parseFloat(document.getElementById('txtNum1').value).toFixed(1) * 0.2
    let nota2 = parseFloat(document.getElementById('txtNum2').value).toFixed(1) * 0.35
    let nota3 = parseFloat(document.getElementById('txtNum3').value).toFixed(1) * 0.45

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('result').innerHTML = `<strong></strong>`
        return false
    }

    let result = nota1 + nota2 + nota3
    result = result.toFixed(1)

    let status = ''

    switch (true) {
        case result >= 4.5:
            status = 'Superior'
            break
        case result >= 3.5:
            status = 'Buena'
            break
        case result >= 3:
            status = 'Media'
            break
        case result < 3:
            status = 'Mala'
            break
        default:
            alert('Valor no válido')
            return false
            break
    }

    document.getElementById('result').innerHTML = `<strong>${result}<br>${status}</strong>`

    return false
}