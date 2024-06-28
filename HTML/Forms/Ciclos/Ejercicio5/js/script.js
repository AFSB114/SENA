function ciclo() {
    let start = parseInt(document.getElementById('start').value)
    let end = parseInt(document.getElementById('end').value)
    let limit = parseInt(document.getElementById('limit').value)

    if (isNaN(start) || isNaN(end) || isNaN(limit)) {
        return false
    }
    let result = '';
    let contPar = 0;
    let contImpar = 0;

    for (let index1 = start; index1 <= end; index1++) {
        for (let index2 = 1; index2 <= limit; index2++) {
            let producto = index1 * index2
            result += `${index1} x ${index2} = ${producto}`
            if (producto % 2 == 0) {
                result += ' Buzz<br>'
                contPar++
            } else {
                result += ' Bass<br>'
                contImpar++
            }
        }
    }

    document.getElementById('result').innerHTML = `<strong>${result}</strong>`
    document.getElementById('conts').innerHTML = `<strong>Pares: ${contPar}<br>Impares: ${contImpar}</strong>`
    return false
}