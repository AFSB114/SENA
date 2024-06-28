function ciclo() {
    let inicio = parseInt(document.getElementById('start').value)
    let fin = parseInt(document.getElementById('end').value)

    if (isNaN(fin) || isNaN(inicio)) {
        document.getElementById('result').innerHTML = `<strong></strong>`
        return false
    }
    let result = '';
    for (let index = inicio; index <= fin; index++) {
        result += `${index}<br>`
    }
    console.log(result)

    document.getElementById('result').innerHTML = `<strong>${result}</strong>`
    return false
}