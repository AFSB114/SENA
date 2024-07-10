function drawLine(start, end) {

    // Extrae las coordenadas de cada elemento en el documento
    let point1 = start.getBoundingClientRect()
    let point2 = end.getBoundingClientRect()

    // Calcula las coordenadas del punto central de cada elemento
    let x1 = point1.left + point1.width / 2
    let y1 = point1.top + point1.height / 2
    let x2 = point2.left + point2.width / 2
    let y2 = point2.top + point2.height / 2

    // Calcula la distnacia que existe entre dos puntos de una recta
    let length = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2)

    // Calcula el angulo que se origina entre dos puntos de una recta
    let m1 = (y2 - y1) / (x2 - x1)
    let m2 = 0
    let angle = Math.atan((m1 - m2) / (1 + m1 * m2)) * 180 / Math.PI

    // Crea la linea y la ubica en la posicion y el angulo calculado
    let line = document.createElement('div')
    line.className = 'line'
    line.style.width = `${length}px`
    line.style.transform = `rotate(${angle}deg)`
    line.style.left = `${x1}px`
    line.style.top = `${y1}px`

    document.body.appendChild(line)
}

function drawX() {

    function drawXInTable(tableId, coordinates) {

        const table = document.getElementById(tableId);

        coordinates.forEach(([[x1, y1], [x2, y2]]) => {

            let start = table.children.nums.children[x1].cells[y1];
            let end = table.children.nums.children[x2].cells[y2];

            drawLine(start, end);
        });
    }

    // Para table2
    drawXInTable('table2', [
        [[0, 0], [4, 4]],
        [[4, 0], [0, 4]]
    ]);

    // Para table3
    drawXInTable('table3', [
        [[0, 0], [2, 2]],
        [[2, 0], [0, 2]],
        [[2, 0], [4, 2]],
        [[4, 0], [2, 2]],
        [[0, 2], [2, 4]],
        [[2, 2], [0, 4]]
    ]);
}

document.addEventListener('DOMContentLoaded', drawX())