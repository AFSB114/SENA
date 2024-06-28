function ciclo() {
    let inicio = parseInt(document.getElementById('start').value)
    let fin = parseInt(document.getElementById('end').value)

    if (isNaN(fin)) {
        return false
    }
    let result = '';
    for (let index = inicio; index <= fin; index++) {
        result += `${index}`

        if (index % 2 == 0){
            result += ' Par<br>'
        } else {
            result += ' Impar<br>'
        }
    }

    document.getElementById('result').innerHTML = `<strong>${result}</strong>`
    return false
}