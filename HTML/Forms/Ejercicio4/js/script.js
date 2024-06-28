function porcent() {
    let num = parseInt(document.getElementById('txtNum').value) 

    if (isNaN(num)){
        document.getElementById('result').innerHTML = `<strong></strong>`
        return false
    }

    let result = num * 0.01

    document.getElementById('result').innerHTML = `<strong>${result}</strong>`

    return false
}