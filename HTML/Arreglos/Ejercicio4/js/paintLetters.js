function paintLetters() {
    setTimeout(() => {
        for (let index = 4; index < 9; index++) {

            let table = document.getElementById(`table-${index}`)
    
            let letter = index - 4
    
            for (let index1 = 0; index1 < 5; index1++) {

                let circle = createCircle()
    
                let cell = table.children[1].children[index1].children[letter].children[0]

                let color = ''
                switch (true) {
                    case letter === 0:
                        color = 'primary'
                        break
                    case letter === 1:
                        color = 'success'
                        break
                    case letter === 2:
                        color = 'danger'
                        break
                    case letter === 3:
                        color = 'warning'
                        break
                    case letter === 4:
                        color = 'info'
                        break
                    default:
                        color = 'secondary'
                        break
                }
                
                circle.classList.add('mark',`bg-${color}-subtle`)
                cell.appendChild(circle)
    
            }
        }
    },2)
}

window.addEventListener('DOMContentLoaded', paintLetters())