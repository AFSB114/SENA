function paintLetters() {
    setTimeout(() => {
        for (let index = 4; index < 9; index++) {

            let table = document.getElementById(`table-${index}`)
    
            let letter = index - 4
    
            for (let index1 = 0; index1 < 5; index1++) {
    
                let cell = table.children[1].children[index1].children[letter]
    
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
    
                cell.classList.add(`table-${color}`, 'border-dark')
    
            }
        }
    },1)
}

window.addEventListener('DOMContentLoaded', paintLetters())