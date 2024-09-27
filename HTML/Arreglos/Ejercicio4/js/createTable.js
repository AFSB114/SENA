window.addEventListener('DOMContentLoaded', function () {
    let numsBingo = []
    let cont = 1

    for (let index1 = 0; index1 < 5; index1++) {
        numsBingo[index1] = []
        for (let index2 = 0; index2 < 15; index2++) {
            numsBingo[index1][index2] = cont
            cont++
        }
    }

    let tableBingo = [];

    const getAvailableNumbers = function (index) {
        let availableNumbers = []
        numsBingo[index].forEach(num => {
            if (!tableBingo[index] || !tableBingo[index].includes(num)) {
                availableNumbers.push(num)
            } else {
                null
            }
        });
        return availableNumbers
    }

    const numRandom = function (index) {
        let availableNumbers = getAvailableNumbers(index);
        if (availableNumbers.length === 0) {
            return null
        } else {
            null
        }
        let randomIndex = Math.floor(Math.random() * availableNumbers.length);
        return availableNumbers[randomIndex]
    }

    for (let index1 = 0; index1 < 5; index1++) {
        for (let index2 = 0; index2 < 5; index2++) {
            let num = numRandom(index1)
            if (num !== null) {
                if (!tableBingo[index1]) {
                    tableBingo[index1] = []
                } else {
                    null
                }
                tableBingo[index1].push(num)
            } else {
                null
            }
        }
    }

    let contId = 1

    function createTable(numTables, idRow) {
        for (let index = 0; index < numTables; index++) {
            let table = document.createElement('table')
            table.id = `table-${contId}`
            contId++
            table.classList.add('table', 'table-bordered', 'border-dark')

            table.appendChild(document.createElement('thead'))
            table.children[0].classList.add('table-dark')

            table.children[0].appendChild(document.createElement('tr'))
            for (let index1 = 0; index1 < letters.length; index1++) {
                table.children[0].children[0].appendChild(document.createElement('th'))

                table.children[0].children[0].children[index1].classList.add('col-2')
                table.children[0].children[0].children[index1].appendChild(document.createElement('div'))

                table.children[0].children[0].children[index1].children[0].classList.add('letters')
                table.children[0].children[0].children[index1].children[0].innerText = letters[index1]
            }

            table.appendChild(document.createElement('tbody'))

            for (let index1 = 0; index1 < tableBingo.length; index1++) {
                table.children[1].appendChild(document.createElement('tr'))
                for (let index2 = 0; index2 < tableBingo[index1].length; index2++) {
                    table.children[1].children[index1].appendChild(document.createElement('td'))
                    table.children[1].children[index1].children[index2].classList.add('col-2')
                    table.children[1].children[index1].children[index2].appendChild(document.createElement('div'))

                    table.children[1].children[index1].children[index2].children[0].classList.add('cell-body')
                    table.children[1].children[index1].children[index2].children[0].appendChild(document.createElement('div'))

                    table.children[1].children[index1].children[index2].children[0].children[0].classList.add('num')
                    table.children[1].children[index1].children[index2].children[0].children[0].innerText = tableBingo[index2][index1]
                }
            }

            let div = document.createElement('div')
            div.classList.add(`col-2`)
            div.appendChild(table)
            document.getElementById(`row-${idRow}`).appendChild(div)
        }
    }

    let letters = ['B', 'I', 'N', 'G', 'O']

    createTable(1, 1)
    
    createTable(2, 2)
    
    createTable(5, 3)
})