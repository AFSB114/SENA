let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 10]

let resultado1 = ''

for (let i = 0; i < array1.length; i++) {
    resultado1 += `<li class="list-group-item">${array1[i]}</li>`
}

document.getElementById('listNum1').innerHTML = resultado1

let array2 = []

for (let i = 0; i < 10; i++) {
    array2.push(i+1)
}

let resultado2 = ''

for (let i = 0; i < array2.length; i++) {
    resultado2 += `<li class="list-group-item">${array2[i]}</li>`
}

document.getElementById('listNum2').innerHTML = resultado2