let factorial = []
let data = []
let result

for (let index1 = 1; index1 <= 5; index1++) {
    data.push(index1)
    data.push('')
    data.push(index1)
    for (let index2 = index1; index2 >= 1; index2--) {
        data[1] += `${index2}`
        if (index2 !== 1) {
            data[1] += ' X '
            if (index2 === data[2]) {
                continue
            }
            data[2] *= index2
        }
    }
    factorial.push(data)
    data = []
}

let screen = ''

for (let index = 0; index < factorial.length; index++) {
    screen += `
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item col-4">${factorial[index][0]}!</li>
            <li class="list-group-item col-4">${factorial[index][1]}</li>
            <li class="list-group-item col-4">${factorial[index][2]}</li>
        </ul>
        `
}

document.getElementById('list-groups').innerHTML = screen