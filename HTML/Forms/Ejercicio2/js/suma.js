function suma() {
    let num1 = parseInt(document.getElementById('txtNum1').value)
    let num2 = parseInt(document.getElementById('txtNum2').value)

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('suma').innerHTML = ``
        return false
    }

    let suma = num1 + num2

    document.getElementById('suma').innerHTML = `<strong>${suma}</strong>`

    return false
}