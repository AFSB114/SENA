function ciclo() {
    let tabla = parseInt(document.getElementById('tabla').value)
    let inicio = parseInt(document.getElementById('start').value)
    let fin = parseInt(document.getElementById('end').value)

    if (isNaN(tabla) || isNaN(inicio) || isNaN(fin)) {
        return false
    }
    let result = '';

    for (let index = inicio; index <= fin; index++) {
        let producto = tabla * index
        result += `${producto}`
        if (producto % 2 == 0){
            result += ' Par<br>'
        } else {
            result += ' Impar<br>'
        }
    }

    document.getElementById('result').innerHTML = `<strong>${result}</strong>`
    return false
}