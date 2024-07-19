function mark() {
    setTimeout(() => {
        let table = document.getElementById("table-1")

        for (let index1 = 0; index1 < 5; index1++) {
            for (let index2 = 0; index2 < 5; index2++) {
                let circle = createCircle()

                circle.classList.add('mark', 'bg-danger-subtle')
                
                if (index1 === 2 && index2 === 2) {
                    circle.style.display = 'block'
                    circle.value = true
                } else {
                    circle.style.display = 'none'
                    circle.value = false
                }

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
            }
        }

    }, 3);
}

window.addEventListener('DOMContentLoaded', mark())