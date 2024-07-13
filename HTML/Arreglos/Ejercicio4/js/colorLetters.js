function colorLetter() {
    let table4 = document.getElementById('table4')
    for (let index1 = 0; index1 < 5; index1++) {
        for (let index2 = 0; index2 < 5; index2++) {
            let cell = table4.children.nums.children[index1].cells[index2]
            switch (true) {
                case index2 === 0:
                    cell.classList.add('table-primary')
                    break
                case index2 === 1:
                    cell.classList.add('table-secondary')
                    break
                case index2 === 2:
                    cell.classList.add('table-success')
                    break
                case index2 === 3:
                    cell.classList.add('table-danger')
                    break
                case index2 === 4:
                    cell.classList.add('table-warning')
                    break
            }
            cell.classList.add('border-dark')
        }
    }
}
document.addEventListener('DOMContentLoaded', colorLetter())