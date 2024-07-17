// let table1 = document.getElementById('table1')

function createCircle(pposition) {
    let position = pposition
    let circle = document.createElement('div')
    circle.classList.add('mark')
    circle.style.width = `${position.width}px`
    circle.style.height = `${position.height}px`
    circle.style.top = `${position.top}px`
    circle.style.left = `${position.left}px`
    return circle
}

function paintX() {
    setTimeout(() => {
        let table2 = document.getElementById('table-2')

        for (let index1 = 0; index1 < 5; index1++) {
            for (let index2 = 0; index2 < 5; index2++) {
                if (index1 === index2 || index1 + index2 === 4) {
                    let position = table2.children[1].children[index1].children[index2].getBoundingClientRect()
                    let circle = createCircle(position)
                    circle.style.backgroundColor = 'rgba(13, 109, 253, 0.3)'
                    table2.children[1].children[index1].children[index2].appendChild(circle)
                }
            }
        }

        let table3 = document.getElementById('table-3')

        for (let index1 = 0; index1 < 3; index1++) {
            for (let index2 = 0; index2 < 3; index2++) {
                if (index1 + index2 === 2 || index1 === index2) {
                    let position = table3.children[1].children[index1].children[index2].getBoundingClientRect()
                    let circle = createCircle(position)
                    circle.style.backgroundColor = 'rgb(25, 135, 84, 0.3)'
                    table3.children[1].children[index1].cells[index2].appendChild(circle)
                }
            }
        }

        for (let index1 = 2; index1 < 5; index1++) {
            for (let index2 = 0; index2 < 3; index2++) {
                if (index1 + index2 === (index2 + 1) * 2 || index1 + index2 === 4) {
                    let position = table3.children[1].children[index1].children[index2].getBoundingClientRect()
                    let circle = createCircle(position)
                    circle.style.backgroundColor = 'rgb(220, 53, 69, 0.3)'
                    table3.children[1].children[index1].cells[index2].appendChild(circle)
                }
            }
        }

        for (let index1 = 0; index1 < 3; index1++) {
            for (let index2 = 2; index2 < 5; index2++) {
                if (index1 + index2 === (index1 + 1) * 2 || index1 + index2 === 4) {
                    let position = table3.children[1].children[index1].children[index2].getBoundingClientRect()
                    let circle = createCircle(position)
                    circle.style.backgroundColor = 'rgb(255, 193, 7, 0.3)'
                    table3.children[1].children[index1].cells[index2].appendChild(circle)
                }
            }
        }
    }, 1)
}

window.addEventListener('DOMContentLoaded0', paintX())

window.addEventListener('resize', () => {
    setTimeout(() => {
        let marks = document.querySelectorAll('.mark');
        marks.forEach(mark => mark.remove())

        paintX()
    }, 500);
});