function createLetter() {
    let letters = ['B', 'I', 'N', 'G', 'O']

    for (let index1 = 0; index1 < 5; index1++) {

        let tableLetter = document.createElement('table')
        tableLetter.classList.add('table', 'table-bordered', 'border-dark')

        let thead = document.createElement('thead')
        thead.classList.add('table-dark')

        let tr = document.createElement('tr')

        let th = document.createElement('th')
        th.classList.add('col-2')
        th.innerText = letters[index1]

        tr.appendChild(th)
        thead.appendChild(tr)
        tableLetter.appendChild(thead)

        let tbody = document.createElement('tbody')

        for (let index2 = 0; index2 < 5; index2++) {
            let td = document.createElement('td')
            let color = 'table-'
            switch (true) {
                case letters[index1] === 'B':
                    color += 'primary'
                    break
                case letters[index1] === 'I':
                    color += 'success'
                    break
                case letters[index1] === 'N':
                    color += 'danger'
                    break
                case letters[index1] === 'G':
                    color += 'warning'
                    break
                case letters[index1] === 'O':
                    color += 'info'
                    break
            }
            td.innerText = tableBingo[index1][index2]
            td.classList.add('col-2',color)
            let tr = document.createElement('tr')
            tr.appendChild(td)
            tbody.appendChild(tr)
        }

        tableLetter.appendChild(tbody)
        let div = document.createElement('div')
        div.classList.add('col-2')
        div.appendChild(tableLetter)

        document.getElementById('letters').appendChild(div)
    }
}

window.addEventListener('DOMContentLoaded', createLetter())