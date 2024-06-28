function prom() {
    let nota1 = parseFloat(document.getElementById('txtNum1').value).toFixed(1) * 0.3
    let nota2 = parseFloat(document.getElementById('txtNum2').value).toFixed(1) * 0.3
    let nota3 = parseFloat(document.getElementById('txtNum3').value).toFixed(1) * 0.4

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        document.getElementById('result').innerHTML = `<strong></strong>`
        return false
    }

    let result = nota1 + nota2 + nota3
    result = result.toFixed(1)  

    document.getElementById('result').innerHTML = `<strong>${result}</strong>`

    return false
}