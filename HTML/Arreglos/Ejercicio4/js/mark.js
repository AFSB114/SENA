function mark() {

    setTimeout(() => {
        let table = document.getElementById("table-1")

        let letters = ['B', 'I', 'N', 'G', 'O']

        document.addEventListener('keydown', (event) => {
            if (event.key.toLowerCase() === 'x') {
                for (let index1 = 0; index1 < 5; index1++) {
                    for (let index2 = 0; index2 < 5; index2++) {
                        if (index1 === index2 || index1 + index2 === 4) {
                            table.children[1].children[index1].children[index2].children[0].children[1].style.display = 'block'
                            table.children[1].children[index1].children[index2].children[0].children[1].value = true
                        }
                    }
                }
            }

            for (let index1 = 0; index1 < 5; index1++) {
                if (event.key.toUpperCase() === letters[index1]) {
                    for (let index2 = 0; index2 < 5; index2++) {
                        table.children[1].children[index2].children[index1].children[0].children[1].style.display = 'block'
                        table.children[1].children[index2].children[index1].children[0].children[1].value = true
                    }
                }
            }

            if (event.key.toLowerCase() === 'c') {
                for (let index1 = 0; index1 < 5; index1++) {
                    for (let index2 = 0; index2 < 5; index2++) {
                        table.children[1].children[index1].children[index2].children[0].children[1].style.display = 'none'
                        table.children[1].children[index1].children[index2].children[0].children[1].value = false
                    }
                }
            }
        })

        for (let index1 = 0; index1 < 5; index1++) {
            for (let index2 = 0; index2 < 5; index2++) {
                let circle = createCircle()

                circle.classList.add('mark', 'bg-danger-subtle')

                circle.style.display = 'none'
                circle.value = false


                table.children[1].children[index1].children[index2].children[0].appendChild(circle)

                table.children[1].children[index1].children[index2].children[0].addEventListener('click', () => {
                    if (circle.value == false) {
                        table.children[1].children[index1].children[index2].children[0].children[1].style.display = 'block'
                        table.children[1].children[index1].children[index2].children[0].children[1].value = true
                    } else {
                        table.children[1].children[index1].children[index2].children[0].children[1].style.display = 'none'
                        table.children[1].children[index1].children[index2].children[0].children[1].value = false
                    }
                })

                table.children[0].children[0].children[index1].children[0].addEventListener('click', () => {
                    table.children[1].children[index2].children[index1].children[0].children[1].style.display = 'block'
                    table.children[1].children[index2].children[index1].children[0].children[1].value = true
                })
            }
        }

    }, 3)
}

window.addEventListener('DOMContentLoaded', mark())