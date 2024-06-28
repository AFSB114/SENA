function figure() {
    let figuras = document.getElementById('figuras')

    let opcion = figuras.options[figuras.selectedIndex].value

    if (opcion == 1) {
        let altura = document.getElementById('txtNum2')
        altura.disabled = true
        altura.value = 0
    } else {
        let altura = document.getElementById('txtNum2')
        altura.disabled = false
    }

}

function area() {
    let valBase = parseInt(document.getElementById('txtNum1').value)
    let valAltura = parseInt(document.getElementById('txtNum2').value)
    let figuras = parseInt(document.getElementById('figuras').value)

    let altura = document.getElementById('altura')
    let figura = document.getElementById('figura')
    let area = document.getElementById('area')
    let base = document.getElementById('base')

    figura.classList.remove(figura.classList[1])

    if (isNaN(valBase) || isNaN(valAltura) || isNaN(figuras)) {
        base.innerHTML = ''
        altura.innerHTML = ''
        area.innerHTML = ''
        return false
    }


    base.innerText = valBase

    let valArea = 0
    switch (figuras) {
        case 1:
            valArea = valBase ** 2
            altura.innerText = valBase
            figura.classList.add('bi-square')
            break;
        case 2:
            valArea = valBase * valAltura
            altura.innerText = valAltura
            figura.classList.add('bi-aspect-ratio')
            break
        case 3:
            valArea = valBase * valAltura / 2
            altura.innerText = valAltura
            figura.classList.add('bi-triangle')
            break
        default:
            break
    }

    area.innerHTML = valArea

    return false
}