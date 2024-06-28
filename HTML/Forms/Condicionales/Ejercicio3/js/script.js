function comp () {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)

    let result = ''

    switch (true) {
        case num1 == num2:
            result = `Son iguales`
            break
        case num1 > num2:
            result = `${num1} es mayor`
            break
        case num2 > num1:
            result = `${num2} es mayor`
            break
        default:
            break
    }

    document.getElementById('result').innerHTML = `<strong>${result}</strong>`

    return false
}