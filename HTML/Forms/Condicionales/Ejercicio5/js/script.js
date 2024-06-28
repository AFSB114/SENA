function calEdad(pfechaNa) {
    let fechaNa = pfechaNa
    let fechaAc = new Date()

    let edad = fechaAc.getFullYear() - fechaNa.getFullYear()
    let mesDif = fechaAc.getMonth() - fechaNa.getMonth()
    if (mesDif < 0 || (mesDif === 0 && fechaAc.getDate() < fechaNa.getDate())) {
        edad--;
    }

    return edad
}

function tipoEdad(pedad) {
    let edad = pedad
    let result = ''

    if (edad >= 18) {
        result = 'mayor de edad'
    } else {
        result = 'menor de edad'
    }

    return result
}

function comp() {
    let date1 = new Date(document.getElementById('date1').value)
    let date2 = new Date(document.getElementById('date2').value)
    let date3 = new Date(document.getElementById('date3').value)

    if (isNaN(date1) || isNaN(date2) || isNaN(date3)){
        document.getElementById('result').innerHTML = `<strong></strong>`
        return false
    }

    let edad1 = calEdad(date1)
    let edad2 = calEdad(date2)
    let edad3 = calEdad(date3)

    let result = '';

    result += `La persona 1 es ${tipoEdad(edad1)} tiene ${edad1} años<br>`
    result += `La persona 2 es ${tipoEdad(edad2)} tiene ${edad2} años<br>`
    result += `La persona 3 es ${tipoEdad(edad3)} tiene ${edad3} años<hr>`

    let prom = (edad1+edad2+edad3)/3

    if (prom >= 18) {
        result += 'El promedio de edad cumple con la mayoria de edad'
    } else {
        result += 'El promedio de edad no cumple con la mayoria de edad'
    }

    document.getElementById('result').innerHTML = `<strong>${result}</strong>`

    return false
}