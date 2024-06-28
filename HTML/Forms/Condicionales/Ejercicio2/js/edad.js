function edad () {
    let fechaNa = new Date(document.getElementById('fechaNa').value)
    let fechaAc = new Date()

    if (isNaN(fechaNa)){
        document.getElementById('edad').innerHTML = `<strong></strong>`
        return false
    }

    let edad = fechaAc.getFullYear() - fechaNa.getFullYear()
    let mesDif = fechaAc.getMonth() - fechaNa.getMonth()
    if (mesDif < 0 || (mesDif === 0 && fechaAc.getDate() < fechaNa.getDate())){
        edad--;
    }
    let tipoEdad = '';
    if (edad >= 18){
        tipoEdad='Mayor de edad'
    } else {
        tipoEdad='Menor de edad'
    }

    document.getElementById('edad').innerHTML = `<strong>${edad} ${tipoEdad}</strong>`

    return false
}