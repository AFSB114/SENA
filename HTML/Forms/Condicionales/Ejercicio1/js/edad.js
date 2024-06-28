function edades () {
    let edad = parseInt(document.getElementById('edad').value)

    if (isNaN(edad)){
        document.getElementById('result').innerHTML = `<strong></strong>`
        return false
    }

    let tipoEdad = '';
    if (edad >= 18){
        tipoEdad='Mayor de edad'
    } else {
        tipoEdad='Menor de edad'
    }

    document.getElementById('result').innerHTML = `<strong>${tipoEdad}</strong>`

    return false
}