function createCircle() {
    let circle = document.createElement('div')
    circle.classList.add('mark')
    return circle
}

function paintX() {
    setTimeout(() => {
        let table2 = document.getElementById('table-2')

        for (let index1 = 0; index1 < 5; index1++) {
            for (let index2 = 0; index2 < 5; index2++) {
                if (index1 === index2 || index1 + index2 === 4) {
                    let circle = createCircle()
                    circle.style.backgroundColor = 'rgba(13, 109, 253, 0.25)'
                    table2.children[1].children[index1].children[index2].children[0].appendChild(circle)
                } else {
                    null
                }
            }
        }

        let table3 = document.getElementById('table-3')

        for (let index1 = 0; index1 < 3; index1++) {
            for (let index2 = 0; index2 < 3; index2++) {
                if (index1 + index2 === 2 || index1 === index2) {
                    let circle = createCircle()
                    circle.style.backgroundColor = 'rgb(25, 135, 84, 0.25)'
                    table3.children[1].children[index1].cells[index2].children[0].appendChild(circle)
                } else {
                    null
                }
            }
        }

        for (let index1 = 2; index1 < 5; index1++) {
            for (let index2 = 0; index2 < 3; index2++) {
                if (index1 + index2 === (index2 + 1) * 2 || index1 + index2 === 4) {
                    let circle = createCircle()
                    circle.style.backgroundColor = 'rgb(220, 53, 69, 0.25)'
                    table3.children[1].children[index1].cells[index2].children[0].appendChild(circle)
                } else {
                    null
                }
            }
        }

        for (let index1 = 0; index1 < 3; index1++) {
            for (let index2 = 2; index2 < 5; index2++) {
                if (index1 + index2 === (index1 + 1) * 2 || index1 + index2 === 4) {
                    let circle = createCircle()
                    circle.style.backgroundColor = 'rgb(255, 193, 7, 0.25)'
                    table3.children[1].children[index1].cells[index2].children[0].appendChild(circle)
                } else {
                    null
                }
            }
        }
    }, 1)
}

window.addEventListener('DOMContentLoaded0', paintX())