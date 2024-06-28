function prom() {
    let nota1 = parseFloat(document.getElementById('txtNum1').value)
    let nota2 = parseFloat(document.getElementById('txtNum2').value)
    let nota3 = parseFloat(document.getElementById('txtNum3').value)

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('result').innerHTML = `<strong></strong>`
        return false
    }

    let result = (nota1 + nota2 + nota3) / 3

    document.getElementById('result').innerHTML = `<strong>${result.toFixed(1)}</strong>`

    return false
}