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
        result += `${tabla} * ${index} = ${producto}<br>`
    }

    document.getElementById('result').innerHTML = `<strong>${result}</strong>`
    return false
}